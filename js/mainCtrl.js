angular.module('shadeApp').controller('mainCtrl', function($scope,mainService){
$scope.test = "Issa Test";
$scope.getMakeup = function(shade){
    mainService.getMakeup().then(
        function(response){
            $scope.makeup = response.data.filter(function(cur){
                return cur.product_colors.filter(function(hex){
                    return hexRange(shade, hex.hex_value)
         }).length;
       })
       console.log($scope.makeup);
    })
} 

})


function hexBrightness(hex) {
    // console.log(hex)
    var regExp = hex.length < 6 ? /^#(([a-f\d]))(([a-f\d]))(([a-f\d]))$/i : /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;

    var result = regExp.exec(hex);
    if (result) {
        var r = parseInt("" + result[1] + result[2], 16),
            g = parseInt("" + result[3] + result[4], 16),
            b = parseInt("" + result[5] + result[6], 16),
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            l = (max + min) / 2;
        return Math.ceil((l / 255)*100);
    }
    return null;
}

function hexRange(shade, hex){
    var val = hexBrightness(hex);
    // console.log(shade, val)
    switch (shade) {
        case "fair":
        return val <= 100 && val >= 84
        break;
        case "fair2":
        return val <= 83 && val >= 80
        break;
        case "medium":
        return val <= 79 && val >= 77
        break;
        case "medium2":
        return val <= 76 && val >= 68
        break;
        case "warm":
        return val <= 67 && val >= 60
        break;
        case "warm2":
        return val <= 59 && val >= 56
        break;
        case "warm3":
        return val <= 55 && val >= 51
        break;
        case "tan":
        return val <= 50 && val >= 48
        break;
        case "tan2":
        return val <= 47 && val >= 38
        break;
        case "tan3":
        return val <= 37 && val >= 32
        break;
        case "dark":
        return val <= 31 && val >= 25
        break;
        case "dark2":
        return val <= 25 && val >= 0
        break;
        default:
        return null
            break;
    }
}