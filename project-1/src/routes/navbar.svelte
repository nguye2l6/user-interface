
<nav style="background-color:#90EE90;" class="navbar">
    <div class="container justify-content-center">
        <ul class ="navbar-nav flex-row sticky-top">
            <li>
                <a class="nav-link circle-link" href="/">
                    <i class="fa-solid fa-heart"></i>
                </a> 
            </li>
            <!--
            <li>
                <a class="nav-link circle-link" href="/nutrition">
                    <i class="fa-solid fa-heart"></i>
                </a>
            </li>
            -->
            <li>    
                <a class="nav-link circle-link" href="/previous">
                    <i class="fa-solid fa-bars"></i>    
                </a>
            </li>
        </ul>
    </div>
</nav>

<style>
    .navbar-nav{
        gap: 2rem;
    }

    .circle-link{
        --icon: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--icon);
        height: var(--icon);
        border: 2px solid white;
        background-color: white;
        border-radius: 50%;
        padding: 0 ;
    }

    .circle-link i {
        font-size:calc(var(--icon) * 0.7);
        line-height: 1;
    }

    .circle-link:hover {
        background-color: #f0f0f0;
        transform: scale(1.05);
    }
</style>
