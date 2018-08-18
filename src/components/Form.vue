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
          <input type="text" class="form-control" id="namaLengkap" required>
        </div>
      </div>


      <div class="form-group row">
      <label for="ttl" class="col-sm-3 col-form-label">TEMPAT TANGGAL LAHIR <b style="color:red;">*</b></label>
        <div class="form-group col-md-3">
          <input type="text" class="form-control" id="kota" placeholder="Kota" required>
        </div>
        <div class="form-group col-md-1">
          <input type="number" class="form-control" id="tgl" placeholder="Tanggal" required>
        </div>
        <div class="form-group col-md-2">
          <select id="inputState" class="form-control" required>
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
          <input type="number" class="form-control" id="tahun" placeholder="Tahun" required>
        </div>
      </div>

      <div class="form-group row">
        <label for="telp" class="col-sm-3 col-form-label">NO TELEPON <b style="color:red;">*</b></label>
        <div class="col-sm-9">
          <input type="number" class="form-control" id="telp" required>
        </div>
      </div>

      <div class="form-group row">
        <label for="ig" class="col-sm-3 col-form-label">LINK AKUN INSTAGRAM <b style="color:red;">*</b></label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="ig" required>
        </div>
      </div>

      <div class="form-group row">
        <label for="fb" class="col-sm-3 col-form-label">LINK AKUN FACEBOOK (OPTIONAL) <b style="color:red;">*</b></label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="fb" >
        </div>
      </div>

      <div class="form-group row">
        <label class="control-label col-sm-3" for="comment">ALASAN MENGIKUTI #LIPICE7DAYSCHALLENGE <b style="color:red;">*</b></label>
        <div class="col-sm-9"> 
          <textarea class="form-control" rows="5" id="comment" required></textarea>
        </div>
      </div>

      <button type="button" class="btn btn-warning warn btn-lg">Submit</button>
    
    </form>

  </div>
</div>
</template>

<script>
export default {
  name: "Form"
};
</script>

<style>
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
