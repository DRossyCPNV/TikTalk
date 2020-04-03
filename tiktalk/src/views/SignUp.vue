<template>
    <div id="SignUp">
        <form>
            <div class="SignUp">
                <div class="SignUp-Label">
                    Login :
                </div>
                <div class="SignUp-Input">
                    <input type="text">
                </div>
            </div>
            <div class="SignUp">
                <div class="SignUp-Label">
                    Password :
                </div>
                <div class="SignUp-Input">
                    <input type="password">
                </div>
            </div>
            <div class="SignUp">
                <input v-on:click="Connect" class="SignUp-Button" type="submit" value="Connect">
            </div>
            <div class="SignUp">
                <input v-on:click="Cancel" class="SignUp-Button" type="submit" value="Cancel">
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "SignUp",
  methods : {
      Connect : function () {
          alert("Test Connect");
      },
      Cancel : function () {
          alert("Test Cancel");
      }
  }
};
</script>

<style scoped>
#SignUp
{
    background-color: red;
    width: 600px;
    height: 400px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.SignUp
{
    background-color: orange;
    border: black 1px solid;
    width: 500px;
    height: 50px;
    margin: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.SignUp-Label
{
    font-family: 'Baloo Bhai', cursive;
    font-size: 20px;
    width: 200px;

    display: flex;
    align-items: center;
    padding-left: 20px;
}

.SignUp-Input
{
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.SignUp-Button
{

}
</style>