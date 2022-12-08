<script>
    import { base } from "$app/paths";

</script>

<div class="content-wrapper">
    <hr>
    <div>
        <img src="{base}/techstack/robot.svg" alt="robot">
        <img src="{base}/techstack/javascript.svg" alt="js">
        <img src="{base}/techstack/python.svg" alt="python">
        <img src="{base}/techstack/socket.svg" alt="socket">
        <img src="{base}/techstack/svelte-icon.svg" alt="svelte">
        <img src="{base}/techstack/threejs.svg" alt="threejs">
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