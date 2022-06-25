// import dotenv from 'dotenv';
// dotenv.config();

// console.log(process.env);

const serverUrl = "https://hhf94m4l0ue4.usemoralis.com:2053/server";
const appId = "TElNqqhKFrv95nPwXyUNldKipwaOJFK0R5GZXmlg";
Moralis.start({ serverUrl, appId });

// const contractAddress_ = "0x010F97e727C312E136f5b89485491A3F5F170de1";
var contractAddress = '0x709F75f44B376f5688Ca6b530F5F2F126E03c423';
// var contractAddress = process.env.CONTRACT_ADDRESS;
// console.log(contractAddress);
var contractAbi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]" }], "name": "TransferBatch", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "TransferSingle", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "value", "type": "string" }, { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "URI", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }], "name": "balanceOfBatch", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "string", "name": "_tokenUrl", "type": "string" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "getItem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "uri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }];
var contractChain = 'Mumbai';

var score_rarity = {
    1: "test",
    50: "test2",
    1000: "unusual",
    10000: "rare",
    50000: "unique",
    100000: "epic",
    500000: "mythical",
    1000000: "legendary"
}

var rarity_score = {
    "test": 1,
    "test2": 50,
    "unusual": 1000,
    "rare": 10000,
    "unique": 50000,
    "epic": 100000,
    "mythical": 500000,
    "legendary": 1000000
}

async function upload() {
    const f = document.getElementById("file");
    const data = f.files[0];
    const nf = new Moralis.File(f.files[0].name, data);
    await nf.saveIPFS();
    console.log(nf.ipfs());
}

document.getElementById("upload").onclick = upload;

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logout;

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000, x: 1e-9 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var platforms;
var playerUrl;
var defaultPlayerUrl = "https://ipfs.moralis.io:2053/ipfs/Qmf9oyDB8pXNARiH1NfBTYT6Fyb6QeXHEEAnCxuukZ1fWH";
var player;
var cursors;
var cactuses = [];

var jumpHeight = -400;

var baseSpeed = -5;
var maxSpeed = -15;
var acceleration = -0.1;
var currentSpeed;
var gameOver = false;
var rank;

var score = 0;
var scorePeriod = 30;
var time = scorePeriod;
var scoreText;

var highScore;
var highScoreText;

var gameOverText;

async function launch() {
    let user = Moralis.User.current();
    if (!user) {
        console.log("PLEASE LOG IN WITH METAMASK!!")
    }
    else {
        console.log(user.get("ethAddress") + " " + "logged in")
        await initPlayerUrl();
        game = new Phaser.Game(config);
    }
}

launch();
// game = new Phaser.Game(config);

async function login() {
    // let user = Moralis.User.current();
    // if (!user) {
    //     user = await Moralis.authenticate();
    //     await Moralis.enableWeb3();
    //     console.log("logged in user: ", user);
    //     var game = new Phaser.Game(config);
    // }
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.Web3.authenticate();
        launch()
    }
    console.log("logged in user:", user);
}

async function logout() {
    await Moralis.User.logOut();
    console.log("logged out");
}

async function initPlayerUrl() {
    const userAdd = Moralis.User.current().get('ethAddress');
    const opts = {
        chain: contractChain,
        address: userAdd,
    };
    // const playerUrl;
    const nfts = await Moralis.Web3API.account.getNFTs(opts);
    console.log(nfts);
    if (nfts.total == 0) {
        const query = new Moralis.Query("NFTDino");
        query.equalTo("rarity", "usual");
        const results = await query.find();
        if (results.length > 0) {
            const object = results[0];
            playerUrl = object.attributes.imageUrl;
        }
    } else {
        var maxk = 0;
        imU = defaultPlayerUrl;
        for (let i in nfts.result) {
            tad = nfts.result[i].metadata;
            tad = tad.replaceAll("\\", "");
            tad = JSON.parse(tad);
            p = {
                tad: tad["image"]
            }
            // var res = Moralis.Cloud.run("getUrl", p);
            // console.log(res);
            // var q = new Moralis.Query("NFTDino");
            // q.equalTo("imageUrl", tad["image"]);
            // const rest = await q.find();
            // console.log(rest[0].attributes.imageUrl);
            // var r = tad["image"];
            // console.log(defaultPlayerUrl);
            if (rarity_score[tad["description"]] > maxk) {
                maxk = rarity_score[tad["description"]];
                rank = tad["description"];
                imU = tad["image"];
            }
            playerUrl = imU;//rest[0].attributes.imageUrl;
            // console.log(playerUrl);
            // return;
        }
    }
    return playerUrl;
}

async function preload() {
    this.load.image('background', 'assets/bg_desert.png');
    this.load.image('ground', 'assets/sandCenter_rounded.png');
    this.load.image('cactus', 'assets/cactus.png');
    this.load.image('player', playerUrl);
}

async function create() {
    this.add.image(400, 300, 'background');

    let init, dinit;
    cactuses = this.physics.add.staticGroup();
    cactuses.create(Math.random() * 100 + config.width, 532, 'cactus').setScale(0.7).refreshBody();
    for (let c in cactuses.getChildren()) {
        cactuses.getChildren()[c].body.x += 10;
        cactuses.getChildren()[c].body.y += 10;
        cactuses.getChildren()[c].body.width -= 20;
        cactuses.getChildren()[c].body.height -= 10;
    }


    platforms = this.physics.add.staticGroup();
    init = 21;
    dinit = init * 2;
    for (let i = init; i < config.width + dinit; i += dinit) {
        platforms.create(i, 579, 'ground').setScale(0.67).refreshBody();
    }

    player = this.physics.add.sprite(50, 400, 'player').setScale(0.7).refreshBody();

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, cactuses);

    cursors = this.input.keyboard.createCursorKeys();
    currentSpeed = baseSpeed;


    scoreText = this.add.text(16, 10, 'Score: 0', { fontSize: '32px', fill: '#FFF' });

    highScore = localStorage.getItem('high-score') == null ? 0 : localStorage.getItem('high-score');

    highScoreText = this.add.text(416, 210, 'High Score: ' + highScore, { fontSize: '32px', fill: '#FFF' });
}

async function reward() {
    // var fl = false;
    // var prev;
    // for (let k in score_rarity) {
    //     if (score < k) {
    //         if (rarity_score[rank] >= prev) {
    //             return;
    //         }
    //     }
    //     prev = k;
    // }
    var rew = 0;
    for (let key in score_rarity) {
        if (score >= key && key > rew) {
            rew = key;
        }
    }
    rew_rar = score_rarity[rew];
    if(rarity_score[rew_rar] <= rarity_score[rank]) return;
    if (rew_rar != undefined) {
        const query = new Moralis.Query("NFTDino");
        query.equalTo("rarity", rew_rar);
        const results = await query.find();
        if (results.length > 0) {
            const object = results[0];
            attrs = object.attributes;
            metadata = {
                name: attrs.name,
                description: attrs.rarity,
                image: attrs.imageUrl
            };
            vari = {
                base64: btoa(JSON.stringify(metadata)),
            };

            const metaFile = new Moralis.File(attrs.name + "_metadata.json", vari);
            await metaFile.saveIPFS();
            const metadataUrl = metaFile.ipfs();
            console.log(metadataUrl);

            const _tokenId_ = results[0].id;


            _tokenId = 0;
            for (c in _tokenId_) {
                _tokenId += _tokenId_.charCodeAt(c);
            }
            console.log(_tokenId);

            var data = '0x00000000000000000000000000000000000000000000000000000000';
            var fname = 'getItem'

            var sendOptions = {
                contractAddress: contractAddress,
                abi: contractAbi,
                functionName: fname,
                params: {
                    _tokenId: _tokenId,
                    _tokenUrl: metadataUrl,
                    data: data
                }
            };
            await Moralis.enableWeb3();
            // console.log(sendOptions);
            try {
                var contract = await Moralis.executeFunction(sendOptions);
            } catch (e) {
                console.log(e);
                return;
            }
            contract.wait();
        }
    }
}

async function update() {
    if (gameOver || !player) {
        return;
    }
    for (let i in cactuses.getChildren()) {
        gameOver = player.body.touching.right || player.body.touching.down && cactuses.getChildren()[i].body.touching.up;
        if (gameOver) {
            highScore = localStorage.getItem('high-score');
            if (highScore == null || score > highScore) {
                highScore = score;
                localStorage.setItem('high-score', highScore);
                highScoreText.setText('High Score: ' + highScore);
            }
            gameOverText = this.add.text(250, 300, 'Game over.', { fontSize: '48px', fill: '#000' });
            await reward();
            return;
        }
    }
    time--;
    if (time == 0) {
        score++;
        time = scorePeriod;

        scoreText.setText('Score: ' + score);
    }
    if (currentSpeed < maxSpeed) {
        currentSpeed = maxSpeed;
    }
    else if (currentSpeed > maxSpeed) {
        currentSpeed += acceleration / 60;
    }

    for (let i in cactuses.getChildren()) {
        cactuses.getChildren()[i].x += currentSpeed;
        cactuses.getChildren()[i].body.x += currentSpeed;
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(jumpHeight);
    }

    for (let i in cactuses.getChildren()) {
        if (cactuses.getChildren()[i].body.x < -cactuses.getChildren()[i].width) {
            let newX = Math.random() * 100 + config.width;
            cactuses.getChildren()[i].body.x += newX;
            cactuses.getChildren()[i].x += newX;
        }
    }
}