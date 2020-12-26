<template>
  <div class="pets" id="pets">
    <h1>Cats</h1>
	<div>
		<h3>Male</h3>
		<ul>
		  <li v-for="name in cats.Male">
			  {{name}}
		  </li>
		</ul>
	</div>
	<div>
		<h3>Female</h3>
		<ul>
		  <li v-for="name in cats.Female">
			  {{name}}
		  </li>
		</ul>
	</div>
  </div>
</template>

<script>

export default {
	name: 'CodeTest',
	created() {
		this.getPetsData();
	},
	data() {
		return {
			cats: {
				'Male': [],
				'Female': []
			}
		}
	},
	methods: {
		getPetsData: function() {
			this.api.getPets()
			.then(res => {
				let data = res.data;
				let cats_map = {};
				
				if (data != null && data.length > 0) {
					for (let i in data) {
						let owner = data[i];
						let gender = owner.gender;
						let pets = owner.pets;
						let cats_list = cats_map[gender] != undefined ? cats_map[gender] : [];
						if (pets != null && pets.length > 0) {
							for (let j in pets) {
								let pet = pets[j];
								if (pet.type === 'Cat') {
									cats_list.push(pet.name);
								}
							}
						}
						cats_map[gender] = cats_list.sort();
					}
				}
				this.cats = cats_map;
			})
			.catch(error => {
				console.log(error);
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pets {
  width: 500px;
}
h1, h2, h3 {
  font-weight: normal;
}
h3 {
  text-align: left;
  margin-left: 25%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px;
}
a {
  color: #42b983;
}
</style>
