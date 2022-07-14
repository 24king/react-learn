// 页面数据内容-watcher, 传递数据标示,传递值变化检测函数,传递变化处理listener
window.onload = function() {
    function getNewValue(scope) {
        return scope[this.name];
    }

    function $scope() {
        // AngularJS里，$$表示其为内部私有成员
        this.$$watchList = [];
    }

    // 脏检查监测变化的一个方法
    $scope.prototype.$watch = function(name, getNewValue, listener) {
        var watch = {
            // 标明watch对象
            name: name,
            // 获取watch监测对象的值
            getNewValue: getNewValue,
            // 监听器，值发生改变时的操作
            listener: listener
        };

        this.$$watchList.push(watch);
    }

    $scope.prototype.$digest = function() {
        var list = this.$$watchList;
        for (var i = 0; i < list.length; i++) {
            list[i].listener();
        }
    }

    var scope = new $scope;
    scope.$watch('first', function() {
        console.log("I have got newValue");
    }, function() {
        console.log("I am the listener");
    })

    scope.$watch('second', function() {
        console.log("I have got newValue  =====2");
    }, function() {
        console.log("I am the listener =====2");
    })

    // 手动触发一下watch的监听器
    scope.$digest();
}