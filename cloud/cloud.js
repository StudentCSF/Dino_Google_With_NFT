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