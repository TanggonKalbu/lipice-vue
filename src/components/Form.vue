<template>
    <div class="card" style="box">
    <div class="card-body">
        <h2 class="card-title reg">REGISTER HERE</h2>
        <br>
        <h3 class="card-title">Calling all beauty enthusiast!</h3>
        <h3 class="card-title">Submission are available to anyone  and everyone with a passion</h3>
        <h3 class="card-title">for make-up artistry.</h3>
    <br>
        <label class="card-subtitle mb-2 text-muted">REGISTRATION FIELDS :</label>
    <br><br>
    <form class="form-horizontal" action="/action_page.php">

      <div class="form-group row">
        <label for="namaLengkap" class="col-sm-3 col-form-label">NAMA LENGKAP <b style="color:red;">*</b></label>
        <div class="col-sm-9">
          <input  type="text" class="form-control" id="namaLengkap" v-model="kontestan.namalengkap" >
        </div>
      </div>


      <div class="form-group row">
      <label for="ttl" class="col-sm-3 col-form-label">TEMPAT TANGGAL LAHIR <b style="color:red;">*</b></label>
        <div class="form-group col-md-3">
          <input type="text" v-model="kontestan.tempatlahir" class="form-control" id="kota" placeholder="Kota">
        </div>
        <div class="form-group col-md-1">
          <input type="number" v-model="kontestan.tgllahir" class="form-control" id="tgl" placeholder="Tanggal">
        </div>
        <div class="form-group col-md-2">
          <select v-model="kontestan.bulanlahir" id="inputState" class="form-control">
            <option selected>Bulan</option>
            <option>Januari</option>
            <option>Februari</option>
            <option>Maret</option>
            <option>April</option>
            <option>Mei</option>
            <option>Juni</option>
            <option>Juli</option>
            <option>Agustus</option>
            <option>September</option>
            <option>Oktober</option>
            <option>November</option>
            <option>Desember</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <input v-model="kontestan.tahunlahir" type="number" class="form-control" id="tahun" placeholder="Tahun">
        </div>
      </div>

      <div class="form-group row">
        <label for="telp" class="col-sm-3 col-form-label">NO TELEPON <b style="color:red;">*</b></label>
        <div class="col-sm-9">
          <input v-model="kontestan.notelp" type="number" class="form-control" id="telp">
        </div>
      </div>

      <div class="form-group row">
        <label for="ig" class="col-sm-3 col-form-label">LINK AKUN INSTAGRAM <b style="color:red;">*</b></label>
        <div class="col-sm-9">
          <input type="text" v-model="kontestan.linkig" class="form-control" id="ig">
        </div>
      </div>

      <div class="form-group row">
        <label for="fb" class="col-sm-3 col-form-label">LINK AKUN FACEBOOK (OPTIONAL) <b style="color:red;">*</b></label>
        <div class="col-sm-9">
          <input v-model="kontestan.linkfb" type="text" class="form-control" id="fb">
        </div>
      </div>

      <div class="form-group row">
        <label class="control-label col-sm-3" for="comment">ALASAN MENGIKUTI #LIPICE7DAYSCHALLENGE <b style="color:red;">*</b></label>
        <div class="col-sm-9"> 
          <textarea class="form-control" v-model="kontestan.alasan" rows="5" id="comment"></textarea>
        </div>
      </div>

      <button type="button" class="btn btn-warning warn btn-lg" @click="addkontestan" >Submit</button>
    
    </form>

  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Tagihin",
  data() {
    return {
      kontestan: {
        namalengkap: "",
        tempatlahir: "",
        tgllahir: "",
        bulanlahir: "",
        tahunlahir: "",
        notelp: "",
        linkig: "",
        linkfb: "",
        alasan: "",
      }
    };
  },
  methods: {
    addkontestan: function() {
      let newkontestan = {
        namalengkap : this.kontestan.namalengkap,
        tempatlahir : this.kontestan.tempatlahir,
        tgllahir : this.kontestan.tgllahir,
        bulanlahir : this.kontestan.bulanlahir,
        tahunlahir :  this.kontestan.tahunlahir,
        notelp : this.kontestan.notelp,
        linkig : this.kontestan.linkig,
        linkfb : this.kontestan.linkfb,
        alasan : this.kontestan.alasan
      
     
      };
    
        axios.post("/api/add_kontestan", newkontestan).then(response => {
            this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Register',
            text: 'Registrasimu Berhasil !'
            });
          });
      
      
    }
  }
};
</script>

<style>
* {
}
.box {
  padding: 10px;
}
.warn {
  color: white;
  border-radius: 30px;
  float: right;
}
.reg {
  color: #6ebee0;
}
.card {
  padding: 40px;
}
</style>
