Moralis.Cloud.define("ipfsBinary", async (request) => {
  const result = await Moralis.Cloud.toIpfs({
    sourceType: "base64Binary",
    source: request.params.image,
  });
  return result;
});

Moralis.Cloud.define("ipfsJson", async (request) => {
  const result = await Moralis.Cloud.toIpfs({
    sourceType: "object",
    source: request.params.metadata,
  });
  return result;
});

Moralis.Cloud.define("getDataFromUrl", async (request) => {
  return Moralis.Cloud.httpRequest({
    method: "GET",
    url: request.params.url
  })
});

Moralis.Cloud.define("createFile", async (request) => {
  const base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
  const file = new Moralis.File(request.params.file, { base64: base64 });
  return file;
});

Moralis.Cloud.define("getPlayerUrl", async (request) => {
  let nfts = await Moralis.Web3API.account.getNFTs(request.params.options);
  let rarity_score = request.params.rarity_score;
  let playerUrl = null;
  let imU = null;
  let maxk = 0;
  let rank = null;
  let tad;
  for (let i in nfts.result) {
    tad = nfts.result[i].metadata;
    if (tad == null) {
      let uri = nfts.result[i].token_uri;
      let o = {
        url: uri
      };
      tad = (await Moralis.Cloud.run("getDataFromUrl", o)).data;
      tad = tad.replaceAll("\\", "");
    }
    tad = JSON.parse(tad);
    if (rarity_score[tad["description"]] > maxk) {
      maxk = rarity_score[tad["description"]];
      rank = tad["description"];
      imU = tad["image"];
    }
    playerUrl = imU;
  }
  result = {
    rank: rank,
    playerUrl: playerUrl
  };
  return result;
});

Moralis.Cloud.define('reward', async (request) => {
  let query = new Moralis.Query("NFTDino");
  query.equalTo("rarity", request.params.rew_rar);
  let results = await query.find();
  if (results.length > 0) {
    let object = results[0];
    let attrs = object.attributes;

    let metadata = {
      name: attrs.name,
      description: attrs.rarity,
      image: attrs.imageUrl
    };

    let base64 = btoa(JSON.stringify(metadata));

    let metaFile = await Moralis.Cloud.toIpfs({
      sourceType: "base64",
      source: base64
    });

    let metadataUrl = metaFile.path;
    
    let _tokenId_ = results[0].id;


    let _tokenId = 0;
    for (c in _tokenId_) {
      _tokenId += _tokenId_.charCodeAt(c);
    }

    let data = '0x00000000000000000000000000000000000000000000000000000000';
    let fname = 'getItem';

      let params = {
        _tokenId: _tokenId,
        _tokenUrl: metadataUrl,
        data: data
    };
    return {
      params: params,
      fname: fname
    };
  }
  return null;
});