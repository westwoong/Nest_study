export class SearchUserResponseDto {
  companyName: string;
  name: string;
  productList: { price: number; productName: string }[];

  constructor(responseData: {
    companyName: string;
    name: string;
    productList: { price: number; productName: string }[];
  }) {
    this.name = responseData.name;
    this.companyName = responseData.companyName;
    this.productList = responseData.productList;
  }
}
