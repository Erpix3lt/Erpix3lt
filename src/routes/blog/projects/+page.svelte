<script>
    import Blog from '$lib/components/blog/blog.svelte'
import Footer from '$lib/components/footer.svelte';
import LowLevelHeader from '$lib/components/lowLevelHeader.svelte';
import TopLevelHeader from '$lib/components/topLevelHeader.svelte';
</script>
<div class="content-wrapper">
<TopLevelHeader/>
<LowLevelHeader/>
<Blog></Blog>
<Footer/>
</div>
<style>
	.content-wrapper{
		margin: 0 auto;
		width: 90%;
	}
	:global(body) {
		font-family: 'Montserrat', sans-serif;
		background-color: #0c141a;
		color: white;
	}

	@media screen and (max-width: 992px) {
		
		.content-wrapper{
			width: 95%;
		}
	}
</style>