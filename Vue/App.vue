<template>
  <div id="app">
   
	 <div class="container">
        <div class="jumbotron">
 <h1>{{ msg }}</h1>
    <h2>Enter your latitude and longitude to display your location on a Google Map </h2>
            <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" v-model="latitudecoor" name="lat" id="latloc" ref="myTestField" placeholder="Latitude" class="form-control">
						</div>
                    <div class="col">
                        <input type="text" v-model="longitudecoor" name="lon" id="lonloc" ref="myTestField2" placeholder="Longitude" class="form-control">
                    </div>
                </div>
			
                
            </form>
			<div class="form-row">
                    <div class="col">
                        <button v-on:click="showMyLocation()" class="btn btn-primary mt-4" >Show my location</button>
                    </div>		
                </div>
        </div>
    </div>
	<img ref = "linkvalue" v-bind:src="links">
  </div>
</template>
 
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'My Location',
	  latitudecoor: '',
	  longitudecoor: '',
	  links: ''
    }
  },
  methods: {
	showMyLocation() {
		const str1 = "https://maps.googleapis.com/maps/api/staticmap?center=";
		const str5 = "&zoom=15&size=450x450&markers=color:red%7Clabel:A%7C"
		const apikey = "&key=AIzaSyDbECeh-34xXVkMWAacPdJ_4v_vwFK36u4"
		const comma = ","
		const links = this.$refs.linkvalue["src"]
		const finallink = str1.concat(this.latitudecoor).concat(comma).concat(this.longitudecoor).concat(str5).concat(this.latitudecoor).concat(comma).concat(this.longitudecoor).concat(apikey);
		this.links = finallink;
	}
  }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: bold;
}

h2 {
  font-weight: normal;
  font-size: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
