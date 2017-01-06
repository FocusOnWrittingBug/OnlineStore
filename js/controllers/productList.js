/**
 * Created by hxsd on 2016/12/15.
 */
angular.module('myapp').controller('productListCtrl',function($scope,shopCart){
    $scope.pageNum=1;
    $scope.pageSize=3;

    $scope.selectCategory=null;
    $scope.selectedCategory=function(category){
        $scope.pageNum=1;
        $scope.selectCategory=category;
    }
    $scope.categoriesFilter=function(product){
        return $scope.selectCategory==null||product.categories==$scope.selectCategory;
    }
    //console.log($scope.pageNums);
    //console.log($scope.pageNums);

    //console.log($scope.pages);
    $scope.page=function(p){
        $scope.pageNum=p;
    }
    $scope.add=function(product){
        shopCart.add(product);
    }
})
