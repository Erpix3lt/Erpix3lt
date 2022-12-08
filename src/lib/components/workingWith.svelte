<div class="content-wrapper">
    <hr>
    <div>
        <img src="./techstack/appium.svg" alt="appiumn">
        <img src="./techstack/figma.svg" alt="figma">
        <img src="./techstack/git-icon.svg" alt="git">
        <img src="./techstack/java.svg" alt="java">
        <img src="./techstack/javascript.svg" alt="js">
        <img src="./techstack/nodejs-icon.svg" alt="node">
        <img src="./techstack/python.svg" alt="python">
        <img src="./techstack/raspberry-pi.svg" alt="raspberry">
        <img src="./techstack/socket.svg" alt="socket">
        <img src="./techstack/svelte-icon.svg" alt="svelte">
        <img src="./techstack/threejs.svg" alt="threejs">
        <img src="./techstack/spring-icon.svg" alt="spring-boot">
        <img src="./techstack/tensorflow.svg" alt="tensorflow">
    </div>
</div>

<style>

    .content-wrapper{
        padding-top: 1.5em;
    }


    img{
        width: 30px;
        height: auto;
        padding: 1.5em;
        padding-left: 0em;

       
    }

    .content-wrapper div{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }


    hr { 
        background-color: #2F5371; height: 1px; 
        border: 0;
        width: 100%;
    }

    :global(body.light-mode) hr{
        background-color: #b99b99;
    }

    @media screen and (max-width: 992px) {
        div{
            justify-content: space-evenly;
        }
    }
</style>