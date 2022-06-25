Moralis.Cloud.define("getAvg", async function (request) {
  const query = new Moralis.Query("EthTransactions");
  const pipeline = [
    {
      group: {
        // group by "from_address"
        objectId: "$from_address",
        // add computed property avgGas
        // get average and convert wei to gwei
        avg: { $avg: { $divide: ["$gas_price", 1] } },
      },
    },
    { sort: { avg: -1 } }, // sort by avgGas high to low
    { limit: 10 }, // only return top 10 results
  ];

  // the master key is required for aggregate queries
  const results = await query.aggregate(pipeline, { useMasterKey: true });
  return results;
});

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
})