/**
 * Created by hxsd on 2016/12/16.
 */
angular.module('myapp').controller('checkCtrl',function($scope,shopCart){
    $scope.cartData=shopCart.findAll();
    $scope.sum=function(){
        var count=0;
        angular.forEach($scope.cartData,function(item){
            count+=item.product.price*item.number;
        })
        return count;
    }
    $scope.del=function(item){
        shopCart.del(item);
    }
})
