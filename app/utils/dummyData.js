
exports.users = [
    {
        // user_id: "62883ef869dd44057ec48d99",
        firstName: "Kurt Clyde",
        lastName: "Esperas",
        birthDate: "11/08/1996",
        age: "25",
        gender: "male",
        contact: "123456789",
        address: "Tacloban City",
        email_address: "kurtclyde.webdev@gmail.com",
        username: "kurt",
        password: "123456",
        notes: "erros are inevitable, but fixing it is irresistable",        
    },
    {
        // user_id: "62882fcf785293853f9fa6e3",
        firstName: "Mark Steven",
        lastName: "Alba",
        birthDate: "06/25/1996",
        age: "25",
        gender: "male",
        contact: "123456789",
        address: "Tacloban City",
        email_address: "marksteven.webdev@gmail.com",
        username: "mark",
        password: "123456",
        notes: "we fix errors and extinguish bugs -BUGTECH",      
    },
    {
        // user_id: "62883006785293853f9fa6e5",
        firstName: "Marty Gee",
        lastName: "Pabello",
        birthDate: "04/06/1997",
        age: "25",
        gender: "male",
        contact: "123456789",
        address: "Tacloban City",
        email_address: "Martygee.webdev@gmail.com",
        username: "marty",
        password: "123456",
        notes: "erros are inevitable, but fixing it is irresistable",       
    },
    {
        // user_id: "62883f4151f90a278eba0592",
        firstName: "Brix",
        lastName: "Delute",
        birthDate: "04/30/1997",
        age: "25",
        gender: "male",
        contact: "123456789",
        address: "Tacloban City",
        email_address: "brixdelute.webdev@gmail.com",
        username: "brix",
        password: "123456",
        notes: "when life gives you errors, you need to find fixes",
    },  
]
exports.roles = [
    {
        // role_id: "62883fba4cb10a61ba34b9d7",
        title: "User",
        notes: "basic user",        
    },
    {
        // role_id: "62883feadc52538257114e84",
        title: "Moderator",
        notes: "2nd tier user",       
    },
    {
        // role_id: "6288401754554086de98431c",
        title: "Admin",
        notes: "Admin",       
    },  
]
exports.notifications = [
    {
        // notfication_id: "628840b083cd47f6c691d326",
        title: "Payment Received",
        content: "purchased products from 'processed products'.",
        type: "payment",
        status: "done",
        notes: "has paid 325.00",      
    },
    {
        // notfication_id: "628840e11b7102c25ba90d0b",
        title: "Order Processed",
        content: "order has been processed, and is ready to be served",
        type: "order process",
        status: "done",
        notes: "adobo is ready to be served",       
    },
    {
        // notfication_id: "6288411c80906a08fc46f412",
        title: "Inventory Updated",
        content: "inventory has been updated as of 05/22/2022",
        type: "Inventory Update",
        status: "ongoing",
        notes: "inventory items and products updating",      
    },
]
exports.categories = [
    {
        // category_id: "62883b7c9c772055cbff1de1",
        name: "Menu",
        description: "list of cooked meals everyday",
        notes: "meal types are updated on a daily basis",        
    },
    {
        // category_id: "62883c1951f9331719553fb5",
        name: "Processed Products",
        description: "packaged products ready to be sold without any preparations : chips, cigarettes, candy, etc..",
        notes: "inventory is regularly updated",      
    },
    {
        // category_id: "62883cb911d1e786c37edea7",
        name: "Drinks and Beverages",
        description: "a variety of non-alcoholic to alcoholic drinks and beverages",
        notes: "alcoholic drinks are to be sold to customers 18 and above",      
    },
    {
        // category_id: "62883d5b2b93ec1a58673320",
        name: "Cook to Order",
        description: "meals that are only cooked when ordered : silog, nilaga, goto, etc..",
        notes: "dishes are only cooked when cashier receives an order from customer",       
    }
]
exports.products = [
    {
        // product_id: "62884317f2f6a84d770663d6",
        name: "Goto/Lugaw",
        description: "Sticky rice, with various choices of protein : chicken, pork, beef, etc..",
        type: "Food",
        categories: "Cook to Order",
        notes: "only cook product when ordered",
        category_id: "62883d5b2b93ec1a58673320"
    },
    {
        // product_id: "628845dd763cc9cbc4a9ea00", 
        name: "Bulalo",
        description: "Boiled Beef with corn and various spices",
        type: "Food",
        categories: "Cook to Order",
        notes: "only cook product when ordered",
        category_id: "62883d5b2b93ec1a58673320"
    },
    {
        // product_id: "6288461817c8369f7ce3c1f6",
        name: "Silog",
        description: "different choices of main protein with egg and fried rice",
        type: "Food",
        categories: "Cook to Order",
        notes: "only cook product when ordered",
        category_id: "62883d5b2b93ec1a58673320"
    },
    {
        // product_id: "6288463c1993103219a511d5",
        name: "Bicol-Express",
        description: "creamy and spicy pork viand",
        type: "Cooked food",
        categories: "Menu",
        notes: "cooked dishes displayed for customers to buy, eat and enjoy",
        category_id: "62883b7c9c772055cbff1de1",
    },
    {
        // product_id: "62884679e5f6238443291964",
        name: "Pork Adobo",
        description: "Filipino National Ulam",
        type: "Cooked food",
        categories: "Menu",
        notes: "cooked dishes displayed for customers to buy, eat and enjoy",
        category_id: "62883b7c9c772055cbff1de1"
    },
    {
        // product_id: "628846b687e7b9f075ff9c69",
        name: "Beef Steak",
        description: "Beef marinated with lemon, soy sauce and various spices",
        type: "Cooked food",
        categories: "Menu",
        notes: "cooked dishes displayed for customers to buy, eat and enjoy",
        category_id: "62883b7c9c772055cbff1de1"
    },
    {
        // product_id: "628846eb5fc43690469109e9",
        name: "Fish Crackers",
        description: "ready packed fish crackers",
        type: "Processed Snack",
        categories: "Processed Products",
        notes: "25.00",
        category_id: "62883c1951f9331719553fb5",
    },
    {
        // product_id: "62884734e1e991a313d34ac9",
        name: "Marlboro Red",
        description: "factory made tobacco roll",
        type: "Processed product",
        categories: "Processed Products",
        notes: "9.00",
        category_id: "62883c1951f9331719553fb5",
    },
    {
        // product_id: "6288476c7d62f802ef7e9ca0",
        name: "Cup Noodles",
        description: "Instant Noodles",
        type: "Processed Food",
        categories: "Processed Products",
        notes: "35",
        category_id: "62883c1951f9331719553fb5",
    },
    {
        // product_id: "628847baf9cb1d75a131abe1",
        name: "Redhorse",
        description: "Philippine National Beer",
        type: "Alcoholic-drink",
        categories: "Drinks and Beverages",
        notes: "65.00 500ml, 125.00 1L",
        category_id: "62883cb911d1e786c37edea7"
    },
    {
        // product_id: "628847e00003e79a402ad7d4",
        name: "Coke",
        description: "Carbonated Drink",
        type: "Carbonated Drink",
        categories: "Drinks and Beverages",
        notes: "15.00 12onz, 35.00 1L, 65.00 1.5L",
        category_id: "62883cb911d1e786c37edea7"
    },
    {
        // product_id: "628847fa899cbc9c9d891a42",
        name: "SanMig Light",
        description: "Alcoholic-drink",
        type: "Alcoholic Drink",
        categories: "Drinks and Beverages",
        notes: "65.00 500ml",
        category_id: "62883cb911d1e786c37edea7"
    },
]
exports.purchases = [
    {
        // purchase_id: "62884a81a1abd56cd6898c30"
        product_id: "628847baf9cb1d75a131abe1",
        qty: "3",
        price: "125.00",
        total: "375.00",
        type: "Alcoholic Drink",
        purchsedBy: "Marty",
        notes: "paid 05/21/2022",       
    },
    {
        // purchase_id: "62884b1090da99cf9484b14d",
        product_id: "628847e00003e79a402ad7d4",
        qty: "1",
        price: "65",
        total: "65",
        type: "carbonated drink",
        purchsedBy: "Brix",
        notes: "paid 05/15/2022",        
    },
    {
        // purchase_id: "62884b7759ce96229903997c"
        product_id: "6288461817c8369f7ce3c1f6",
        qty: "1",
        price: "95",
        total: "95",
        type: "food",
        purchsedBy: "Mark",
        notes: "paid 05/13/2022",      
    },
    {
        // purchase_id: "62884bd3d0a6d67826805999"
        product_id: "62884317f2f6a84d770663d6",
        qty: "5",
        price: "35",
        total: "175.00",
        type: "Food",
        purchsedBy: "Jim",
        notes: "paid 05/19/2022",    
    },
]
exports.order_items = [
    {
        //order_item_id:  "62884f8b6acc2dbd4653a079"
        inventory_id: "62884df77b370ebff6fb039f",
        qty: "2",
        price: "35.00",
        subtotal: "70.00",
        notes: "...",
    },
    {
        //order_item_id:  "62884fb0d3f35965884df8d0"
        inventory_id: "62884e30576e42ee0669097e",
        qty: "1",
        price: "125.00",
        subtotal: "125.00",
        notes: "...",
    },
]
exports.orders = [
    {
        //order_id: "628862a236440cff2b1f620f"
        description: "mixed product order",
        order_no: "009",
        order_items: "62884f8b6acc2dbd4653a079",
        total_ammount: "70.00",
        recordedBy: "Jim",
        notes: "all goods",
        customer_id: "628861615a431030c37933da" 
    },
]
exports.customers = [
    {
        //customer_id: "628861615a431030c37933da"
        firstName: "Boks",
        lastName: "Black",
        birthDate: "01/22/91",
        age: "25",
        gender: "male",
        contact: "123456789",
        address: "Tacloban City",
        notes: "...",
    },
    {
        //customer_id: "628861a3d412355841b2f8fb"
        firstName: "Boks",
        lastName: "Brown",
        birthDate: "01/23/91",
        age: "25",
        gender: "male",
        contact: "123456789",
        address: "Tacloban City",
        notes: "...",
    },
    {
        //customer_id: "628861cdfb69fc95440ec20d"
        firstName: "Boks",
        lastName: "Blue",
        birthDate: "01/24/91",
        age: "25",
        gender: "male",
        contact: "123456789",
        address: "Tacloban City",
        notes: "...",
    },
 
]
exports.businesses = [
    {
        //business_id: "6288652274bcd6b81823f591"
        name: "Savorich",
        address: "019 Dadison St Pericuhon Tacloban City",
        contact: "123456789",
        email_address: "Savor_rich@gmail.com",
        type: "Resto",
        notes: "Active",
        inventory: "62884e30576e42ee0669097e",
        orders: "628862a236440cff2b1f620f",
        purchases: "62884bd3d0a6d67826805999",
        payments: "paid"
       
    },

]
exports.payments = [
    {
        //payment_id: "62886631bb28ab4ac0360da0"
        order_id: "628862a236440cff2b1f620f",
        customer_id: "628861a3d412355841b2f8fb",
        business_id: "6288652274bcd6b81823f591",
        description: "paid in full",
        amount: "70.00",
        type: "payment",
        receivedBy: "Jim",
        notes: "completed"
    },
]
exports.inventories = [
    {
        // inventory_id: "62884df77b370ebff6fb039f"
        product_id: "62884317f2f6a84d770663d6",
        purchase_id: "62884bd3d0a6d67826805999",
        description: "Food",
        inStocks: "5",
        price: "35.00",
        notes: "available"
    },
    {
        // inventory_id: "62884e30576e42ee0669097e"
        product_id: "628847baf9cb1d75a131abe1",
        purchase_id: "62884a81a1abd56cd6898c30",
        description: "alcoholic drinks",
        inStocks: "3",
        price: "125",
        notes: "available"
    },
    {
        // inventory_id: "62884e5eddc46ca4199532e0"
        product_id: "628847e00003e79a402ad7d4",
        purchase_id: "62884b1090da99cf9484b14d",
        description: "carbonated drinks",
        inStocks: "1",
        price: "65",
        notes: "available"
    },
]
