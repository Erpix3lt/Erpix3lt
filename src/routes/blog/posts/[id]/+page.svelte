<script>
    import Post from '$lib/components/blog/post.svelte'
    import TopLevelHeader from '$lib/components/topLevelHeader.svelte'
	import LowLevelHeader from '$lib/components/lowLevelHeader.svelte'
	import Footer from '$lib/components/footer.svelte'

     /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>POST - {data.topic}</title>
</svelte:head>

<div class="content-wrapper">
    <TopLevelHeader/>
    <LowLevelHeader/>
    <Post post={data}></Post>
    <Footer/>
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
</style>