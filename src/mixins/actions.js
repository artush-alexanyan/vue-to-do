
const actions = {
    data: () => {
        return {
            user: {
                first_name: '',
                last_name: '',
                age: null,
                isEdited: false
            },
            userEdited: {
                newFirstName: '',
                newLastName: '',
                newAge: ''
            },
            isAdded: false,
            loading: false,
            editing: false,
            fields: ['First Name', 'Last Name', 'Age', 'Delete', 'Edit'],
            items: [
              { isEdited: false, age: 40, first_name: 'Dickerson', last_name: 'Macdonald', new_first_name: 'Dickerson', new_last_name: 'Macdonald', new_age: '40' },
              { isEdited: false, age: 21, first_name: 'Larsen', last_name: 'Shaw',  new_first_name: '', new_last_name: '', new_age: '' },
              { isEdited: false, age: 89, first_name: 'Geneva', last_name: 'Wilson',  new_first_name: '', new_last_name: '', new_age: '' },
              { isEdited: false, age: 38, first_name: 'Jami', last_name: 'Carney',  new_first_name: '', new_last_name: '', new_age: '' }
            ]
        }
    },
    methods: {
        addUser () {
            this.loading = true
            if(this.user.first_name != '' && this.user.last_name != '' && this.user.age != '' ) {
                setTimeout(() => {
                    this.isAdded = false
                    this.items.push({
                        age: this.user.age,
                        first_name: this.user.first_name,
                        last_name: this.user.last_name,
                        new_first_name: this.user.first_name,
                        new_last_name: this.user.last_name,
                        new_age: this.user.age,
                        isEdited: this.user.isEdited,
                    })   
                    this.loading = false             
                }, 1500)                 
            }else{
                alert('Please fill out all fields!')
                 this.loading = false
            }
        },
        deleteUser (index) {
            this.items.splice(index,1)
        },
        editUser (index) {
            this.items.find((item, ind) => {
                if(index == ind && item.isEdited == false) {
                    item.isEdited = true
                }else if (index == ind && item.isEdited == true) {
                    item.isEdited = false
                }
            })
        },
        editUserData (index) {
            this.editing = true
                    setTimeout (() => {
                        this.items.find((item, ind) => {
                        if(index == ind) {
                            item.first_name = item.new_first_name
                            item.last_name = item.new_last_name
                            item.age = item.new_age
                            item.isEdited = false
                            this.editing = false    
                        }
                    })              
            },1500)
        },
        cancelAdding () {
            this.isAdded = false
        }
    }
}

export default actions