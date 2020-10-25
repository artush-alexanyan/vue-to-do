<template>
  <b-container class="mt-3 mb-5" bordered='true'>  
    <b-row class="mt-5">
      <b-col>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"  
                  v-for="field in fields" 
                  :key="field.id"
                > 
                {{ field }} 
              </th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in items" :key="item.id">
            <tr v-show="!item.isEdited">
              <td> <strong> {{ item.first_name }} </strong> </td>
              <td> <strong> {{ item.last_name }} </strong> </td>
              <td> <strong> {{ item.age }} </strong> </td>
              <td>
                <button class="btn btn-danger"
                        @click="deleteUser(index)"
                        >
                    <i class="fas fa-trash-alt"></i>
                </button>
              </td>
              <td>
                <button class="btn btn-primary"
                        @click="editUser(index)"  
                      >
                    <i class="far fa-edit"></i>
                </button>
              </td>              
            </tr>
            <tr v-show="item.isEdited">
              <td> <input type="text" 
                          v-model="item.new_first_name" 
                          :placeholder="item.first_name"
                          class="form-control"
                        > 
              </td>
              <td> <input type="text" 
                        :placeholder="item.last_name" 
                        v-model="item.new_last_name"
                        class="form-control"
                      > 
              </td>
              <td> <input type="number" 
                          :placeholder="item.age"
                          v-model="item.new_age"
                          class="form-control"
                      > 
              </td>
              <td>
                <button class="btn btn-warning"
                        @click="editUserData(index)"
                        v-if="!editing"
                      >
                   <i class="far fa-save"></i>
                </button>   
                <button class="btn btn-primary" type="button" disabled v-if="editing">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  saving...
                </button>           
              </td>
              <td>
                <button class="btn btn-success" 
                        @click="editUser(index)"
                  >
                  <i class="fas fa-window-close"></i>
                </button>                 
              </td>              
            </tr>            
          </tbody>
        </table>        
      </b-col>
    </b-row>    
    <b-row v-show="!isAdded">
      <b-col>
        <button type="button" 
                class="btn btn-success"
                @click="isAdded = true" 
            >
         Add new item
         <i class="fas fa-plus-circle"></i>
        </button>
      </b-col>
    </b-row>
    <b-row v-show="isAdded">
      <b-col>
        <label>Name</label>
          <input type="text" 
                 class="form-control" 
                 v-model="user.first_name"
                >
        <label>Last Name</label>
          <input type="text" 
                 class="form-control" 
                 v-model="user.last_name"
                >
        <label>Age</label>
          <input type="number" 
                 class="form-control" 
                 v-model="user.age"
                >
        <label class="mr-3 mt-3">Check activity</label>
          <input type="checkbox" 
                 v-model="user.isActive"
                >  <br>
          <button class="btn btn-success" 
                  @click="addUser"
                  v-show="!loading"
                >
                Add
          </button>
          <button class="btn btn-primary ml-3" 
                  @click="cancelAdding"
                  v-if="!loading"
                >
                Cancel
          </button>           
          <button class="btn btn-warning" type="button" v-if="loading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Adding...
          </button>                          
      </b-col>
    </b-row>  

  </b-container>
</template>

<script>
import actions from '../mixins/actions.js'

  export default {
    mixins: [ actions ],
    components: {  },
    name: 'Home',
    data() {
      return {
        
      }
    }
  }
</script>