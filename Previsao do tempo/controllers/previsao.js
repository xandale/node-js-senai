// controller/previsao.js

const capitaisBrasil = [
         { id: 1, nome: "Rio Branco", latitude: -9.9754, longitude: -67.8243 },
         { id: 2, nome: "Maceió", latitude: -9.6658, longitude: -35.735 },
         { id: 3, nome: "Macapá", latitude: 0.0355, longitude: -51.0705 },
         { id: 4, nome: "Manaus", latitude: -3.119, longitude: -60.0217 },
         { id: 5, nome: "Salvador", latitude: -12.9714, longitude: -38.5014 },
         { id: 6, nome: "Fortaleza", latitude: -3.7172, longitude: -38.5433 },
         { id: 7, nome: "Brasília", latitude: -15.7801, longitude: -47.9292 },
         { id: 8, nome: "Vitória", latitude: -20.3155, longitude: -40.3128 },
         { id: 9, nome: "Goiânia", latitude: -16.6864, longitude: -49.2643 },
         { id: 10, nome: "São Luís", latitude: -2.5307, longitude: -44.3068 },
         { id: 11, nome: "Cuiabá", latitude: -15.6014, longitude: -56.0979 },
         { id: 12, nome: "Campo Grande", latitude: -20.4697, longitude: -54.6201 },
         { id: 13, nome: "Belo Horizonte", latitude: -19.9167, longitude: -43.9345 },
         { id: 14, nome: "Belém", latitude: -1.455, longitude: -48.5024 },
         { id: 15, nome: "João Pessoa", latitude: -7.1195, longitude: -34.845 },
         { id: 16, nome: "Curitiba", latitude: -25.4296, longitude: -49.2713 },
         { id: 17, nome: "Recife", latitude: -8.0476, longitude: -34.877 },
         { id: 18, nome: "Teresina", latitude: -5.0892, longitude: -42.8019 },
         { id: 19, nome: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 },
         { id: 20, nome: "Natal", latitude: -5.7945, longitude: -35.211 },
         { id: 21, nome: "Porto Alegre", latitude: -30.0346, longitude: -51.2177 },
         { id: 22, nome: "Porto Velho", latitude: -8.7612, longitude: -63.9039 },
         { id: 23, nome: "Boa Vista", latitude: 2.8235, longitude: -60.6758 },
         { id: 24, nome: "Florianópolis", latitude: -27.5954, longitude: -48.548 },
         { id: 25, nome: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
         { id: 26, nome: "Aracaju", latitude: -10.9472, longitude: -37.0731 },
         { id: 27, nome: "Palmas", latitude: -10.2128, longitude: -48.3603 }
         
      ];

        const climaCidades = [
            { num: 1, temperatura: 32, condicao: "Ensolarado" },
            { num: 2, temperatura: 28, condicao: "Parcialmente nublado" },
            { num: 3, temperatura: 30, condicao: "Chuvoso" },
            { num: 4, temperatura: 34, condicao: "Ensolarado" },
            { num: 5, temperatura: 29, condicao: "Nublado" },
            { num: 6, temperatura: 31, condicao: "Ventos fortes" },
            { num: 7, temperatura: 25, condicao: "Parcialmente nublado" },
            { num: 8, temperatura: 27, condicao: "Chuvoso" },
            { num: 9, temperatura: 26, condicao: "Ensolarado" },
            { num: 10, temperatura: 29, condicao: "Nublado" },
            { num: 11, temperatura: 35, condicao: "Muito quente" },
            { num: 12, temperatura: 28, condicao: "Chuvoso" },
            { num: 13, temperatura: 24, condicao: "Nebuloso" },
            { num: 14, temperatura: 31, condicao: "Chuvoso" },
            { num: 15, temperatura: 30, condicao: "Ensolarado" },
            { num: 16, temperatura: 19, condicao: "Frio e nublado" },
            { num: 17, temperatura: 28, condicao: "Ventos fortes" },
            { num: 18, temperatura: 33, condicao: "Muito quente" },
            { num: 19, temperatura: 27, condicao: "Parcialmente nublado" },
            { num: 20, temperatura: 29, condicao: "Ensolarado" },
            { num: 21, temperatura: 22, condicao: "Nebuloso" },
            { num: 22, temperatura: 32, condicao: "Muito quente" },
            { num: 23, temperatura: 34, condicao: "Ensolarado" },
            { num: 24, temperatura: 20, condicao: "Frio e nublado" },
            { num: 25, temperatura: 23, condicao: "Chuvoso" },
            { num: 26, temperatura: 28, condicao: "Ventos fortes" },
            { num: 27, temperatura: 35, condicao: "Muito quente" }
        ];

exports.get = (req, res, next) => {
    res.status(200).send(capitaisBrasil);
  };
    
    exports.post = (req, res, next) => {
        capitaisBrasil.push(req.body);
        res.status(200).json({ message: "Previsão adicionada!", dados: capitaisBrasil });
    };

  
    let id = parseInt (req.params.id);
    const cidades = capitaisBrasil.find(c => c.id === id);
    const climas = climaCidades.find (c => c.num === id);

    if(cidades && climas) {
        res.json ({
            cidade: cidades.nome,
            temperatura: climas.temperatura,
            condicao: climas.condicao
        })
    }else{
        res.json("NÃO ENCONTRADO")
    }
    res.status(201).send(`Previsão atualizada! ${id}`);
  
  