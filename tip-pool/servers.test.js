describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server with an empty input', function (){
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update the server table with updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();
    let td = document.querySelectorAll('#serverTable tbody tr td');

    expect(td.length).toEqual(3);

  })

  afterEach(function() {
    serverID = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
