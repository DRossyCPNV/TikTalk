<template>
    <div id="SignIn">
        <form>
            <div class="SignIn">
                <div class="SignIn-Label">
                    Login :
                </div>
                <div class="SignIn-Input">
                    <input type="text">
                </div>
            </div>
            <div class="SignIn">
                <div class="SignIn-Label">
                    Password :
                </div>
                <div class="SignIn-Input">
                    <input type="password">
                </div>
            </div>
            <div class="SignIn">
                <input class="SignIn-Button" type="submit" value="Connect">
            </div>
            <div class="SignIn">
                Don't have an account yet ?
                <router-link to="/sign-up">Sign up here!</router-link>
                <router-view name="SignUp"></router-view>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style scoped>
#SignIn
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

.SignIn
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

.SignIn-Label
{
    font-family: 'Baloo Bhai', cursive;
    font-size: 20px;
    width: 200px;

    display: flex;
    align-items: center;
    padding-left: 20px;
}

.SignIn-Input
{
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.SignIn-Button
{

}
</style>