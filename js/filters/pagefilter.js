/**
 * Created by hxsd on 2016/12/15.
 */
angular.module('pagefilter')
    .filter('pageFilter',function(){
        return function (products,pageNum,pageSize){
            if(!angular.isArray(products)||!angular.isNumber(pageNum)||!angular.isNumber(pageSize)){
                return products;
            }
            var startIndex=(pageNum-1)*pageSize;
            //if(product.length>=startIndex){
            //   return [];
            //}
            var newArr=products.slice(startIndex,pageSize*pageNum);
            return newArr;
        }
    })
    .filter('pagesFilter',function(){
    return function (products,num){
        var arr=[];
        for(var i=0;i<Math.ceil(products.length/num);i++){
            arr.push(i+1);
        }
        return arr;
    }
})
