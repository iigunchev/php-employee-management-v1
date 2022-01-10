fetch("../resources/employees.json")
.then(res => res.json())
.then(data => jsGridFun(data))

function jsGridFun(data){
    $("#jsGrid").jsGrid({
        width: "100%",
        //height: "400px",
    
        autoload: false,
        controller: {
            loadData: function(filter) {
                return $.ajax({
                    type: "GET",
                    url: "../resources/employees.json",
                    data: filter
                });
            },
            
            insertItem: function(item) {
                return $.ajax({
                    type: "POST",
                    url: "../resources/employees.json",
                    data: item
                });
            },
            
            updateItem: function(item) {
                return $.ajax({
                    type: "PUT",
                    url: "../resources/employees.json",
                    data: item
                });
            },
            
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "../resources/employees.json",
                    data: item
                });
            },
        },

        inserting: true,
        editing: true,
        sorting: true,
        paging: true,

        pagerContainer: null,
        pageIndex: 1,
        pageSize: 3,
        pageButtonCount: 5,
        pagerFormat: "Pages: {first} {prev} {pages} {next} {last}    {pageIndex} of {pageCount}",
        pagePrevText: "Prev",
        pageNextText: "Next",
        pageFirstText: "First",
        pageLastText: "Last",
        pageNavigatorNextText: "...",
        pageNavigatorPrevText: "...",
    
        data: data,
    
        fields: [
            { name: "name", type: "text", width: 150, validate: "required" },
            { name: "email", type: "text", width: 150, validate: "required" },
            { name: "age", type: "number", width: 50 },
            { name: "streetAddress", type: "number", width: 50 },
            { name: "city", type: "text", width: 100 },
            { name: "state", type: "text", width: 50 },
            { name: "postalCode", type: "number", width: 50 },
            { name: "phoneNumber", type: "number", width: 200 },
            { type: "control" }
        ]
    });
}
