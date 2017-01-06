/**
 * Created by hxsd on 2016/12/16.
 */
angular.module('cartService')
    .factory('shopCart',function() {
        var cart = [];
        return {
            add: function (product) {
                for (var i = 0; i < cart.length; i++) {
                    var pro = cart[i];
                    if (pro.product.name == product.name) {
                        pro.number++;
                        return;
                    }
                }
                //var item={product:product,number:1};
                //cart.push(item);
                cart.push({product: product, number: 1});
            },
            del: function (product) {
                for (var i = 0; i < cart.length; i++) {
                    var pro = cart[i];
                    if (pro.product.name == product.product.name) {
                        cart.splice(i, 1);
                        break;
                    }
                }
            },
            findAll: function () {
                return cart;
            },
            clear: function () {
                cart.length = 0;
            }
        }
    })
    .controller('cartCtrl',function($scope,shopCart){
        var products=shopCart.findAll();
        $scope.count=function(){
            var count=0;
            angular.forEach(products,function(item){
                count+=item.number;
            })
            return count;
        };
        $scope.price=function(){
            var count=0;
            angular.forEach(products,function(item){
                count+=item.number*item.product.price;
            })
            return count;
        }
    })