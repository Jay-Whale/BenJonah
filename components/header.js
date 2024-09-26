let body = document.querySelector('body');
let div = document.createElement('div');
div.classList.add('card');
div.innerHTML = `
    <nav class="top no-space">
        <button class="icon transparent vertical">
            <i>menu</i>
            <span>menu</span>
            <menu class="no-wrap bottom large-width hidden" id="invisible-menu">
                <a>The crossed out red means I have not gotten to it yet.</a>
                <a class="red-text"><del>Rules</del></a>
                <a class="red-text"><del>Classes</del></a>
                <a class="red-text"><del>Races</del></a>
                <a class="red-text"><del>Backgrounds</del></a>
                <a class="red-text"><del>Feats</del></a>
                <a class="red-text"><del>Skills</del></a>
                <a class="red-text"><del>Spells</del></a>
                <a class="red-text"><del>Monsters</del></a>
                <a href="./magicitems.html">Magic Items</a>
                <a href="./items.html">Items</a>
                <a class="red-text"><del>Equipment</del></a>
                <a class="red-text"><del>Conditions</del></a>
                <a class="red-text"><del>Settings</del></a>
            </menu>
        </button>
        <button class="icon transparent vertical" onclick="navigateTo('./charactergenerator.html')">
            <i>home</i>
            <div>home</div>
        </button>
        <button class="icon transparent vertical" onclick="navigateTo('./about.html')">
            <i>badge</i>
            <div>about</div>
        </button>
    </nav>
    `;
    
    body.appendChild(div);