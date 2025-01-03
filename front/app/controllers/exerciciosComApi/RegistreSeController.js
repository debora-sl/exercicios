// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('RegistreSeController', function($scope, $http, $state) {
    console.log("RegistreSeController funcionando!");
    
    $scope.informacoes = {
        name:'',
        email:'',
        password: '',
        passwordConfirme: ''
    }

    // criando a função para cadastrar
    $scope.registrar = function(){
        console.log('Botão registrar clicado!');
        
        $url = 'http://localhost:8000/api/usuarios/criar';

        if($scope.informacoes.password != $scope.informacoes.passwordConfirme){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "As senhas são diferentes!",
              });
        }else{
            $http.post($url, $scope.informacoes).then(function(response){
                if(response.status == 201){
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'Usuário cadastrado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(function() {
                        $state.go("login");
                    });
                }
                console.log(response);                
            }, function(error){
                if(error.status == 409){
                    Swal.fire({
                        icon: "error",
                        title: "E-mail já cadastrado!",
                        icon: 'error',
                        confirmButtonText: 'Voltar'
                    });
                }
                console.log(error);  
            });
        }
    } 
});