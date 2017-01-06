angular.module('myapp').controller('storeCtrl',function($scope,$http,shopCart,$location){
    $scope.items={
        categories:[
            {name:'商品类别01',id:''},
            {name:'商品类别02',id:''},
            {name:'商品类别03',id:''},
            {name:'商品类别04',id:''}
        ],
        products:[
            {name:'商品01',price:11131,categories:'商品类别01',desc:'2016新款商品1',imgsrc:'images/TB1_50x50.jpg'},
            {name:'商品02',price:113121,categories:'商品类别01',desc:'2016新款商品2',imgsrc:'images/TB2_50x50.jpg'},
            {name:'商品03',price:111,categories:'商品类别01',desc:'2016新款商品3',imgsrc:'images/TB3_50x50.jpg'},
            {name:'商品04',price:113121,categories:'商品类别01',desc:'2016新款商品4',imgsrc:'images/TB1_50x50.jpg'},
            {name:'商品05',price:11311,categories:'商品类别02',desc:'2016新款商品5',imgsrc:'images/TB2_50x50.jpg'},
            {name:'商品06',price:111,categories:'商品类别02',desc:'2016新款6',imgsrc:'images/TB3_50x50.jpg'},
            {name:'商品07',price:113211,categories:'商品类别02',desc:'2016新款7',imgsrc:'images/TB1_50x50.jpg'},
            {name:'商品08',price:111,categories:'商品类别03',desc:'2016新款8',imgsrc:'images/TB2_50x50.jpg'},
            {name:'商品09',price:111231,categories:'商品类别03',desc:'2016新款9',imgsrc:'images/TB3_50x50.jpg'},
            {name:'商品010',price:111,categories:'商品类别04',desc:'2016新款10',imgsrc:'images/TB1_50x50.jpg'},
            {name:'商品011',price:132111,categories:'商品类别04',desc:'2016新款11',imgsrc:'images/TB2_50x50.jpg'},
            {name:'商品012',price:111,categories:'商品类别04',desc:'2016新款12',imgsrc:'images/TB3_50x50.jpg'},
            {name:'商品013',price:113211,categories:'商品类别04',desc:'2016新款13',imgsrc:'images/TB1_50x50.jpg'}
        ],
        user:{}



    }
    $scope.send=function(){
        var url='order.json';
        var order={};
        order.userInfo=angular.copy($scope.items.user);
        order.cart=shopCart.findAll();
        $http.post(url,order)
            .success(function(data){
                $scope.items.orderId=data.orderId;
                shopCart.clear();
        })
            .error(function(err){
                $scope.items.err=err;
        })
            .finally(function(){
            $location.path('/thanks');
        })
    }
})