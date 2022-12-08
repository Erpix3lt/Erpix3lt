<!-- preloader -->

<script context="module">
    throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

    // let tag;
    // /** @type {import('./[tag]').Load} */
    // export async function load({params}) {
    //     tag = params.tag;
    //     console.log("tag" + tag)

		return {props: {tag}}
    // }
</script>

<script lang="ts">
    import DynamicBlog from '$lib/components/blog/dynamicBlog.svelte';
    import Footer from '$lib/components/footer.svelte';
    import LowLevelHeader from '$lib/components/lowLevelHeader.svelte';
    import TopLevelHeader from '$lib/components/topLevelHeader.svelte'

</script>
<div class="content-wrapper">
    <TopLevelHeader/>
    <LowLevelHeader/>
    <DynamicBlog tag={tag}></DynamicBlog>
    <Footer></Footer>
</div>
<style>
	.content-wrapper{
		margin: 0 auto;
		width: 80%;
	}
	:global(body) {
		font-family: 'Montserrat', sans-serif;
		background-color: #0c141a;
	}

	:global(body.light-mode) {
		background-color: #DFCECD;
	}

    @media screen and (max-width: 992px) {
		.content-wrapper{
			width: 95%;
        }
	}
</style>