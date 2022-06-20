const items = [
    {
      id: "1",
      title: "Pelota de fútbol",
      stock: 10,
      description: "Descripción del producto",
      price: 2000,
      pictureUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/28530d07245942fc944dae680084fb30_9366/Pelota_Al_Rihla_Pro_Blanco_H57783_01_standard.jpg",
    },
    {
      id: "2",
      title: "Palo de hockey",
      stock: 5,
      description: "Descripción del producto",
      price: 1000,
      pictureUrl:
        "https://deportesonce.com.ar/wp-content/uploads/virtuemart/product/patriot-37-600x600.jpg",
    },
    {
      id: "3",
      title: "Guantes de boxeo",
      stock: 30,
      description: "Descripción del producto",
      price: 500,
      pictureUrl:
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/520/products/guantes-boxeo-11-af186c03256faaf5f416236238136620-640-0.jpg",
    },
    {
      id: "4",
      title: "Remera running",
      stock: 15,
      description: "Descripción del producto",
      price: 3000,
      pictureUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/54c4e6ceb94d4fbbb5cbaaf2011bb612_9366/Remera_para_correr_Run_It_3_Tiras_PB_Naranja_FR8378_01_laydown.jpg",
    },
  ];

  export const getMockedItems = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });
  };