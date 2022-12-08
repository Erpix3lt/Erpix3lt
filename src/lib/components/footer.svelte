<script>
let currentYear = new Date().getFullYear();
</script>

<hr>
<div class="content-wrapper">
    <div class="copyright-wrapper">
        <p>© {currentYear} Maximilian Schmalenbach</p>
    </div>
    <p class="wave">✌🏼</p>
</div>
<style>
    .content-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    hr { background-color: #2F5371; height: 1px; border: 0; }
    div{
        color: darkgray;
        font-size: .9em;
    }

    :global(body.light-mode) hr{
        background-color: #b99b99;
    }

    :global(body.light-mode) p{
            color: #2c4961;
    }

    .wave {
  animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s;        /* Change to speed up or slow down */
  animation-iteration-count: infinite;  /* Never stop waving :) */
  transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}

</style>