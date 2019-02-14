<template>
  <div class="hello">

    <h1 :class="[nilai > 1 ? 'upKKM' : 'downKKM']">Nilai : {{ nilai }}</h1>
      <h2 v-if="nilai > 1">Kamu lulus :)</h2>
      <h2 v-else>Ayo Semangat:)</h2>
      <div v-for="(soal, soalindex) in soal_detail">
        <h2>No {{soalindex+1}}. {{soal.question}} </h2>
        <div v-for="(jawabans, indexjawaban) in soal.jawaban">
          <input type="radio" @click="checkAnswer(soalindex, indexjawaban)" :value="jawabans[0]" :name="soalindex">
          <span v-text="jawabans[0]"></span>
        </div>
      </div>

      <h3>Jawaban Benar : </h3>
      <ul>
        <li v-for="no_soal in jawabanbenar">No. {{ no_soal+1 }}</li>
      </ul>

  </div>

</template>

<script>


import SoalComponent from '@/components/SoalComponent'
export default {
    name:'Controlleroriginal',
    components:{
      SoalComponent
    },
    data() {
      return{
        nilai: 0,
        jawabanbenar : [],
        jawabansalah : [],
        soal_detail : [
          {
            question : "Apakah vue js itu javascript?",
            jawaban : [
              ["Yas", true],
              ["No"],
            ]
          },
          {
            question : "Apakah susah belajar vue js?",
            jawaban : [
              ["Gampang dong sans"],
              ["Susah amat sih"],
              ["Asalkan mau belajar gampang ko", true],
              ["Cetel"]
            ]
          },
          {
            question : "Apakah medium mu kena suspend?",
            jawaban : [
              ["Iya haduh:("],
              ["Ngga dong"],
              ["Wadaw tau aja", true],
              ["Hehe"]
            ]
          }
        ]
      }
    },
    methods:{
      checkAnswer(soalindex, indexjawaban) {
          if(this.soal_detail[soalindex].jawaban[indexjawaban][1]){
            if(this.jawabanbenar.indexOf(soalindex) == -1){
              this.jawabanbenar.push(soalindex);
            }
            if(this.jawabansalah.indexOf(soalindex) != -1){
              this.jawabansalah.splice(this.jawabansalah.indexOf(soalindex),1);
            }
          }else{
            if(this.jawabanbenar.indexOf(soalindex) != -1){
              this.jawabanbenar.splice(this.jawabanbenar.indexOf(soalindex),1);
              this.jawabansalah.push(soalindex);
            }else if(this.jawabansalah.indexOf(soalindex) != -1){

            }else{
              this.jawabansalah.push(soalindex);
            }
          }
          this.nilai = this.jawabanbenar.length;
        }
    }
}
</script>

<style scoped>


</style>
