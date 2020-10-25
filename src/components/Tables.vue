<template>
    <div class="container tables mb-5">
        <h4 class="text-center">Tables</h4>
        <ul class="nav nav-pills mt-5">
            <li class="nav-item" 
                v-for="(region, index) in regions" 
                :key="region.id"
                @click="changeRegione(index)"
            >
                <a class="nav-link"
                :class="[ currentregion == region ? 'active' : '' ]"
                    >
                {{ region }}
                </a>
            </li>    
            <table class="table mt-3">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col"> Name </th>
                    <th scope="col"> Capital </th>
                    <th scope="col"> Flag </th>
                    <th scope="col"> Subregion </th>
                    </tr>
                </thead>
                <tbody v-for="countrie in pagination" 
                       :key="countrie.id"
                    >
                    <tr>
                    <th> {{ countrie.name }} </th>
                    <th> {{ countrie.capital }} </th>
                    <th> 
                        <img :src="countrie.flag" 
                            class="flag" 
                            alt="Flag"> 
                    </th>
                    <th> {{ countrie.subregion }} </th>
                    </tr>
                </tbody>
            </table> 
            <nav aria-label="Page navigation example mt-5">
            <ul class="pagination">
                <li class="page-item"
                    @click="previous"
                    :class="[ currentpage > 0  ? 'active' : '' ]"
                    >
                <a class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li class="page-item" v-for="(page, index) in getPages" 
                                      :key="page.id"
                                      :class="[ index == currentpage ? 'active' : '' ]"
                                      @click="changePageData(index)"
                                    >
                    <a class="page-link">
                        {{ page }}
                    </a>
                </li>
                <li class="page-item"
                    @click="next"
                    :class="[ currentpage < getPages - 1  ? 'active' : '' ]"
                    >
                <a class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>                      
        </ul>        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Tables',
    data: () => ({
        all: [],
        regions: [],
        tabs: [],
        currentregion: '',
        pagination: [],
        currentpage: 0,
        perPage: 5
    }),
    methods: {
        getAll () {
            axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.all = response.data
                this.getRegions()
                this.changeRegione()
                this.changePageData()
            })
        },
        getRegions () {
            const reg = []
            this.all.forEach(countrie => {
                reg.push(countrie.region)
            })
            this.regions = reg.filter(function(item, pos, self) {
                return self.indexOf(item) == pos
            })  
            this.regions.pop()          
        },
        changeRegione (index, currentregion = 'Asia') {
            this.currentpage = 0
            this.currentregion = currentregion
            const currentCountries = []
            this.regions.filter((reg, ind) => {
                if(index == ind) {
                    this.currentregion = reg
                }
            }) 
            this.all.filter(countrie => {
                    if(countrie.region == this.currentregion) {
                        currentCountries.push(countrie)
                    }
                    this.tabs = currentCountries
            })           
            this.changePageData()
        },
        changePageData (index = 0) {
            this.currentpage = index
            this.pagination = this.tabs.slice(index * this.perPage, index * this.perPage + 5 )
        },
        previous () {
            if(this.currentpage > 0 && this.currentpage < this.getPages) {
                this.currentpage--
                this.pagination = this.tabs.slice(this.currentpage * this.perPage, this.currentpage * this.perPage + 5 )
            }
        },
        next () {
            if(this.currentpage >= 0 && this.currentpage < this.getPages - 1) {
                this.currentpage++
                this.pagination = this.tabs.slice(this.currentpage * this.perPage, this.currentpage * this.perPage + 5 )
            }
        }              
    },
    computed: {
        getPages () {
            return Math.ceil(this.tabs.length / this.perPage)
        }
    },
    created() {
        this.getAll()
    }
}
</script>

<style scoped>
.flag{
    height: 25px;
    width: 40px;
    border-radius: 3px;
}
.nav-item{
    cursor: pointer;
}
</style>