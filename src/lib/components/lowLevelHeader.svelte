<script>
import DarkModeButton from "./darkModeButton.svelte";
import blogAsJSON from './blog/blog.json'

</script>
    <hr>
    <div class="content-wrapper">
        <div class="link-wrapper">
            <a class="links" href="https://maxschmalenbach.herokuapp.com/blog/projects">PROJECTS</a>
            <a class="links"href="https://www.instagram.com/maximilianschmalenbach/">INSTAGRAM</a>
            <a class="links" href="https://github.com/Erpix3lt">GITHUB</a>
        </div>
        <div class="dark-mode-button-wrapper">
            <DarkModeButton></DarkModeButton>
        </div>
    </div>
    <hr>
    <div class="latest-tags-wrapper">
        <a class="tag" href="https://maxschmalenbach.herokuapp.com/blog//{blogAsJSON[0].tag}">
            #{blogAsJSON[0].tag}
        </a>
        <a class="tag" href="https://maxschmalenbach.herokuapp.com/blog//{blogAsJSON[1].tag}">
            #{blogAsJSON[1].tag}
        </a>
        <a class="tag" href="https://maxschmalenbach.herokuapp.com/blog//{blogAsJSON[2].tag}">
            #{blogAsJSON[2].tag}
        </a>
    </div>
<style>
    .latest-tags-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
    .tag{
        color: rgb(170, 194, 219);
        font-size: .8em;
        padding-left: 1em;
        text-decoration: none;
    }
    .link-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .content-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .links{
        padding-top: 1em;
        padding-right: 3em;
        padding-bottom: 1em;
        color: whitesmoke;
        text-decoration: none;
        font-size: .7em;
    }
    hr { background-color: #2F5371; height: 1px; border: 0; }

    :global(body.light-mode) hr{
        background-color: #b99b99;
    }

    :global(body.light-mode) a{
            color: #1d3040;
    }

    @media screen and (max-width: 992px) {
		.links{
            padding-right: 1em;
            font-size: .8em;
        }

        .tag{
            font-size: .8em;
        }



	}
</style>