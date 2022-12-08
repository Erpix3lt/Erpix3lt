<script>
import WorkingWith from "./workingWith.svelte";

</script>

<div class="about-wrapper">
    <div class="sticky">
    <div class="section-header">
        <p>ABOUT</p>
        <hr>
    </div>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div >
        <h1><mark>HI.</mark></h1>
        <h3>MaxSchmalenbach.co</h3>
        <p>
            Hi I am Max! <br>
            Currently studying at Th-Koeln, <a class="light-hightlighting" href="https://coco.study/">Code and Context</a> .
            Interested in design, photography, architecture.
        </p>
        <div class="social">
            <p>The best place to get a hold of me, is to shoot me a dm on
            <a href="https://www.instagram.com/maximilianschmalenbach/">instagram</a></p>
        </div>
        <WorkingWith/>
    </div>
</div>
</div>
<style>
    .about-wrapper{
        width: 30%;    
    }

    h1{
        font-size: 10em;
        line-height: 0;

    }

    mark{
        color: white;      
        background-color: #1d304000;
    }

    :global(body.light-mode) mark{
            color: black;
    }


    mark:hover {
        color: black;
        background-color: #ffff00;
    }


  
    a{
        color: #FF9C9C;
        text-decoration: none;
    }

    .light-hightlighting{
        color: gray;
        text-decoration: none;
    }

    .section-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    }

    .section-header p {
        color: lightgray;
        padding-right: 1em;
    }

    h3{
        color: white;
        padding-top: 1em;
    }
    p{
        font-size: .8;
        color: lightgray;
    }
    hr { 
        background-color: #2F5371; height: 1px; 
        border: 0;
        width: 100%;
    }

    :global(body.light-mode) h3{
            color: #1d3040;
    }

    :global(body.light-mode) hr{
        background-color: #b99b99;
    }

    :global(body.light-mode) p{
            color: #2c4961;
    }

    :global(body.light-mode) a{
            color: #7b4949;
    }

    @media screen and (max-width: 992px) {
		.about-wrapper{
            width: 100%;
        }

        p{
            font-size: 1em;
        }
	}

    .sticky{
		color: white;
		position: -webkit-sticky;
    	position: sticky;
    	top: 0;
	}

</style>