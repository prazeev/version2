<template>
    <div class="container">
        <button class="btn btn-primary pull-right add_space" data-toggle="modal" data-target=".bd-example-modal-lg">+</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
        <!-- Large modal -->
        <div class="modal fade bd-example-modal-lg" id="my_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1 class="modal-title">Add a Space</h1>
                    </div>
                    <div class="modal-body">

                        <div class="form">
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Name</label>

                                <input type="text" class="form-control" placeholder="" v-model="Space.Name">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Number of services</label>

                                <input type="text" class="form-control" placeholder="" v-model="Space.numOfServices">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Total Tickets</label>

                                <input type="text" class="form-control" v-model="Space.totalTickets" >

                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Available Tickets</label>

                                <input type="text" class="form-control" v-model="Space.availableTickets" >
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Now Serving</label>

                                <input type="text" class="form-control" placeholder="" v-model="Space.nowServing">
                            </div>
                            <button type="submit" class="btn btn-primary" @click="addToAPI">Add</button>
                        </div>
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            Space: {
                Name:'',
                numOfServices:'',
                totalTickets:'',
                availableTickets:'',
                nowServing:''
            }
        }
    },
    methods: {
        addToAPI() {
            let newSpace = {
                Name: this.Space.Name,
                numOfServices:this.Space.numOfServices,
                totalTickets:this.Space.totalTickets,
                availableTickets:this.Space.availableTickets,
                nowServing:this.Space.nowServing
            }

            axios.post('http://localhost:3000/space', newSpace)
                .then((response) => {
                    
      window.location.reload();
                })
                .catch((error) => {
                    consol.log(error);
                })
        },
    }
}
</script>

<style>
.add_space {
  background: #f0ab00;
  font-family: 'georgiab';
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100px;
  line-height: 10px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #f0ab00;
  cursor: pointer;
}

.add_space:focus {
  outline: none;
}

</style>
