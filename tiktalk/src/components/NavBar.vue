<template>
    <div id="Navbar-Container">
        <input id="Sidenav-Open-Button"  class="Text" type="button" value="Drawer" onclick="openSidenav();">
        <div class="Spacing"></div>
        <nav>
            <div id="Navbar-Menu">
                <input id="Navbar-Close-Button" class="Text" type="button" value="X" onclick="closeNavbar()">
                <div id="Searchbar">
                    <input id="Search-Input" class="Text" type="search" placeholder="Search...">
                    <input id="Search-Button" class="Text" type="button" value="Search">
                </div>
                <div class="Spacing"></div>
                <a class="Navbar-Link Text">Add Conversation</a>
                <a class="Navbar-Link Text">User Settings</a>
                <a class="Navbar-Link Text">Log Out</a>
            </div>
        </nav>
        <input id="Navbar-Open-Button" class="Text" type="button" value="Expand" onclick="openNavbar()">
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    body
    {
        color: white;

        font-family: Arial;
        font-weight: 400;
        font-size: 14px;

        background-color: #F5F5FA;
    }

    .Text
    {
        font-family: Arial;
        font-weight: 400;
        font-size: 14px;
    }

    #Navbar-Container
    {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 40px;
        margin: 20px 0;
        padding-left: 20px;
        padding-right: 20px;
    }

    #Navbar-Open-Button
    {
        color: white;

        display: none;
        position: relative;
        align-items: center;
        justify-content: center;

        height: 100%;
        padding: 20px;

        background-color: #9A0DFF;
        outline: none;
        border: none;
        border-radius: 40px;
    }

    #Navbar-Close-Button
    {
        display: none;
        align-items: center;
        justify-content: center;

        color: white;
        height: 100%;

        background-color: transparent;
        outline: none;
        border: none;
        border-radius: 40px;
    }

    .Spacing
    {
        flex-grow: 1;

        height: 100%;
    }

    nav
    {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 750px;
        height: 100%;
        padding: 5px;

        background-image: linear-gradient(135deg, #9A0DFF, #FF5967);
        border-radius: 40px;
    }

    #Navbar-Menu
    {
        display: flex;
        flex-grow: 1;
        align-items: stretch;
        justify-content: space-between;

        height: 100%;
    }

    #Searchbar
    {
        display: flex;
        align-items: center;

        width: 400px;
        height: 100%;
    }

    #Search-Input
    {
        width: 80%;
        height: 100%;
        padding: 8px 12px 8px 12px;

        outline: none;
        border: none;
        border-bottom-left-radius: 40px;
        border-top-left-radius: 40px;
    }

    #Search-Button
    {
        color: white;

        width: 20%;
        height: 100%;
        padding: 8px 12px 8px 12px;

        background-color: #3030C0;
        outline: none;
        border: none;
        border-bottom-right-radius: 40px;
        border-top-right-radius: 40px;
    }

    .Navbar-Link
    {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 50px;
        padding: 20px;
    }

    #Sidenav-Open-Button
    {
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;

        background-color: #9A0DFF;
        outline: none;
        border: none;
        border-radius: 40px;
    }

    #Sidenav-Close-Button
    {
        color: black;

        display: flex;
        justify-content: flex-end;

        width: 100%;
        height: 50px;
        padding-right: 20px;

        background-color: transparent;
        outline: none;
        border: none;
    }

    #Sidenav {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 1;
        width: 200px;
        margin-top: 20px;
        margin-left: 20px;
        overflow: hidden;

        background-color: white;
        border-radius: 40px;

        box-shadow: 1px 1px 5px 0px rgba(211,211,233,1);
    }


    .Sidenav-Link
    {
        color: black;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 50px;

        border-top: #d3d3e9 1px solid;
    }

    @media (max-device-width: 900px)
    {
        .Text
        {
            font-size: 2rem;
        }

        /* ----- Navbar ----- */
        #Navbar-Container
        {
            min-height: 100px;
        }

        nav
        {
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            position: fixed;
            top: 0px;
            left: 0px;
            z-index: 1;

            width: 75%;
            height: 400px;
            margin-top: 20px;
            margin-left: 20px;

            border-radius: 50px;
            overflow: hidden;
        }

        #Navbar-Menu
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 100%;
        }

        #Searchbar
        {
            width: 100%;
            height: 100px;
        }

        #Search-Button
        {
            border-top-right-radius: 100px;
            border-bottom-right-radius: 100px;
        }

        #Search-Input
        {
            border-top-left-radius: 100px;
            border-bottom-left-radius: 100px;
        }

        .Navbar-Link
        {
            width: 100%;
        }

        #Navbar-Open-Button
        {
            display: flex;
            border-radius: 100px;
        }

        #Navbar-Close-Button
        {
            width: 100%;
            border-radius: 100px;
        }


        /* ----- Sidenav ----- */
        #Sidenav
        {
            width: 75%;
        }

        .Sidenav-Link
        {
            min-height: 100px;
        }

        #Sidenav-Open-Button
        {
            border-radius: 100px;
        }

        #Sidenav-Close-Button
        {
            min-height: 100px;
        }
    }
</style>