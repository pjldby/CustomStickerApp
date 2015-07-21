//CHANGING FONT SIZE
function changeFontSize(size)
{
  size=size+'px';
  sticker.style.fontSize=size;
}

var CustomStickerApp = angular.module('CustomStickerApp',[]);

CustomStickerApp.controller('CustomStickerController', function($scope){

  //CHANGING FONT FAMILY
  $scope.changeFontFamily = function (font){
    switch (font)
     {
       case 'A':
         $scope.customText={'font-family': 'Exo 2'};
         break;

       case 'B':
         $scope.customText={'font-family': 'Open Sans'};
         break;

       case 'C':
         $scope.customText={'font-family': 'Oswald'};
         break;

       case 'D':
         $scope.customText={'font-family': 'Damion'};
         break;

      default:
        $scope.customText={'font-family': 'Exo 2'};
    }
  }

  //CHANGING TEXT COLOR
  $scope.changeFontColor = function (color){
    switch (color)
    {
      case 'black':
        $scope.customText={color: '#2e2e2e'};
        break;

      case 'white':
        $scope.customText={color: '#fff'};
        break;

      case 'blue':
        $scope.customText={color: '#495ebb'};
        break;

      case 'green':
        $scope.customText={color: '#5db343'};
        break;

      case 'orange':
        $scope.customText={color: '#ffb819'};
        break;

      case 'red':
        $scope.customText={color: '#d01616'};
        break;

      default:
        $scope.customText={color: '#2e2e2e'};
    }
  }

  //CHANGING BACKGROUND
  $scope.changeBackground = function (myback){
    console.log(myback);
    switch (myback)
    {
      case 'black':
        $scope.stickerDiv={background : '#2e2e2e'};
        break;

      case 'white':
        $scope.stickerDiv={background : '#fff'};
        break;

      case 'blue':
        $scope.stickerDiv={background : '#495ebb'};
        break;

      case 'green':
        $scope.stickerDiv={background : '#5db343'};
        break;

      case 'orange':
        $scope.stickerDiv={background : '#ffb819'};
        break;

      case 'red':
        $scope.stickerDiv={background : '#d01616'};
        break;

      case 'back1':
        $scope.stickerDiv={background : 'url(backgrounds/back1.jpg)'};
        break;

      case 'back2':
        $scope.stickerDiv={background : 'url(backgrounds/back2.jpg)'};
        break;

      case 'back3':
        $scope.stickerDiv={background : 'url(backgrounds/back3.jpg)'};
        break;

      case 'back4':
        $scope.stickerDiv={background : 'url(backgrounds/back4.jpg)'};
        break;

      default:
        $scope.stickerDiv={background : '#2e2e2e'};
    }
  }
});
