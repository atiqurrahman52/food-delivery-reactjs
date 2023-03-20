import React from "react";
import user from "../../assets/image/recipes-detail/user.webp";
import recipes_detail from '../../assets/image/recipes-detail/recipes-detail-2.webp'
const RecipesIntroductionAndConclusion = () => {
  return (
    <div className="bg-[#F9F6F1]">
      <div className="container">
        <div className="py-4 lg:py-6">
          <div className="mb-4 lg:mb-12">
            <h3 className="font-Playfair font-bold text-2xl lg:text-[32px] leading-[34px] lg:leading-[42px] text-primary mb-2">
              Introduction
            </h3>
            <p className="font-Playfair font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/60">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id. <br />
              <br />
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.
            </p>
          </div>

          <div>
            <img
              src={recipes_detail}
              alt=""
            />
          </div>
          <div className="divide-x">
            <p className="font-Raleway font-medium text-sm leading-[21px] text-primary  mt-4 border-l-2 pl-2 border-primary">
              Image caption goes here
            </p>
          </div>

          <div className="mt-6">
            <p className="font-Playfair font-bold text-xl leading-7 text-primary mb-4">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <p className="font-Raleway font-medium text-sm lg:text-base leading-6 text-black mb-4">
              Collaboratively deploy intuitive partnerships whereas customized
              e-markets. Energistically maintain performance based strategic
              theme areas whereas just in time methodologies. Phosfluorescently
              drive functionalized intellectual capital and.
            </p>
            <p className="font-Inter italic text-base lg:text-xl leading-7 text-black mb-8 border-l-2 border-primary pl-6">
              "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus."
            </p>
            <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary">
              Tristique odio senectus nam posuere ornare leo metus, ultricies.
              Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
              Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
              suscipit accumsan. Cursus viverra aenean magna risus elementum
              faucibus molestie pellentesque. Arcu ultricies sed mauris
              vestibulum.
            </p>
          </div>

          <div className="pt-7">
            <h3 className="font-Playfair font-bold text-2xl lg:text-[32px] leading-[34px] lg:leading-[42px] text-primary mb-2">
              Conclusion
            </h3>
            <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary mb-4">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary mb-4">
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
            <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary">
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
              aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
              id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
              dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
              tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
              gravida enim posuere cursus diam.
            </p>
          </div>

          <div className="flex justify-between flex-col md:flex-row gap-[14px] pt-6 lg:pt-16 border-b border-b-[#989794] pb-4 lg:pb-6">
            <div className="">
              <p className="font-Raleway font-medium text-sm lg:text-lg leading-[21px] lg:leading-[27px] text-primary mb-3 lg:mb-4">
                Share this post
              </p>

              <div className="flex space-x-2">
                <a href="#">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.9999 8.16008V8.50008C21.0007 9.56616 20.576 10.5885 19.8199 11.34L16.9999 14.17C16.4738 14.6911 15.6261 14.6911 15.1 14.17L15 14.06C14.8094 13.8656 14.8094 13.5544 15 13.36L18.4399 9.92006C18.807 9.53938 19.0083 9.02883 18.9999 8.50008V8.16008C19.0003 7.62705 18.788 7.11589 18.4099 6.7401L17.7599 6.09011C17.3841 5.71207 16.873 5.49969 16.3399 5.50011H15.9999C15.4669 5.49969 14.9558 5.71207 14.58 6.09011L11.14 9.50007C10.9456 9.69064 10.6344 9.69064 10.44 9.50007L10.33 9.39007C9.8089 8.86394 9.8089 8.01623 10.33 7.49009L13.16 4.65012C13.9165 3.90505 14.9382 3.49133 15.9999 3.50014H16.3399C17.4011 3.4993 18.4191 3.92018 19.1699 4.67012L19.8299 5.33012C20.5798 6.0809 21.0007 7.09891 20.9999 8.16008ZM8.64993 14.44L13.9399 9.15008C14.0338 9.05543 14.1616 9.00218 14.2949 9.00218C14.4282 9.00218 14.556 9.05543 14.6499 9.15008L15.3499 9.85007C15.4445 9.94395 15.4978 10.0717 15.4978 10.2051C15.4978 10.3384 15.4445 10.4662 15.3499 10.5601L10.0599 15.85C9.96604 15.9447 9.83824 15.9979 9.70492 15.9979C9.57161 15.9979 9.44381 15.9447 9.34993 15.85L8.64993 15.15C8.55528 15.0561 8.50204 14.9283 8.50204 14.795C8.50204 14.6617 8.55528 14.5339 8.64993 14.44ZM13.5599 15.5C13.3655 15.3094 13.0543 15.3094 12.8599 15.5L9.42993 18.91C9.0517 19.2905 8.53645 19.503 7.99995 19.4999H7.65995C7.12691 19.5004 6.61576 19.288 6.23997 18.91L5.58997 18.26C5.21194 17.8842 4.99956 17.373 4.99998 16.84V16.5C4.99956 15.9669 5.21194 15.4558 5.58997 15.08L9.00993 11.64C9.2005 11.4456 9.2005 11.1345 9.00993 10.94L8.89993 10.83C8.3738 10.3089 7.52609 10.3089 6.99996 10.83L4.17999 13.66C3.42392 14.4116 2.99916 15.4339 3 16.5V16.85C3.00182 17.9077 3.42249 18.9216 4.16999 19.6699L4.82998 20.3299C5.58076 21.0799 6.59878 21.5008 7.65995 21.4999H7.99995C9.05338 21.5061 10.0667 21.0964 10.8199 20.3599L13.6699 17.51C14.191 16.9838 14.191 16.1361 13.6699 15.61L13.5599 15.5Z"
                      fill="#004738"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 3.5H19C20.1046 3.5 21 4.39543 21 5.5V19.5C21 20.6046 20.1046 21.5 19 21.5H5C3.89543 21.5 3 20.6046 3 19.5V5.5C3 4.39543 3.89543 3.5 5 3.5ZM8 18.5C8.27614 18.5 8.5 18.2761 8.5 18V11C8.5 10.7239 8.27614 10.5 8 10.5H6.5C6.22386 10.5 6 10.7239 6 11V18C6 18.2761 6.22386 18.5 6.5 18.5H8ZM7.25 9.5C6.42157 9.5 5.75 8.82843 5.75 8C5.75 7.17157 6.42157 6.5 7.25 6.5C8.07843 6.5 8.75 7.17157 8.75 8C8.75 8.82843 8.07843 9.5 7.25 9.5ZM17.5 18.5C17.7761 18.5 18 18.2761 18 18V13.4C18.0325 11.8108 16.8576 10.4545 15.28 10.26C14.177 10.1593 13.1083 10.6744 12.5 11.6V11C12.5 10.7239 12.2761 10.5 12 10.5H10.5C10.2239 10.5 10 10.7239 10 11V18C10 18.2761 10.2239 18.5 10.5 18.5H12C12.2761 18.5 12.5 18.2761 12.5 18V14.25C12.5 13.4216 13.1716 12.75 14 12.75C14.8284 12.75 15.5 13.4216 15.5 14.25V18C15.5 18.2761 15.7239 18.5 16 18.5H17.5Z"
                      fill="#2231BC"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9727 7.2174C20.5083 7.83692 19.9469 8.37733 19.3102 8.81776C19.3102 8.97959 19.3102 9.14142 19.3102 9.31225C19.3153 12.2511 18.1414 15.0691 16.0517 17.1345C13.9619 19.1999 11.1311 20.3399 8.19393 20.2989C6.49587 20.3046 4.81955 19.9169 3.2963 19.1661C3.21416 19.1302 3.16119 19.049 3.1615 18.9593V18.8604C3.1615 18.7313 3.26611 18.6267 3.39515 18.6267C5.0643 18.5716 6.6739 17.9929 7.99622 16.9724C6.48541 16.9419 5.12607 16.0469 4.50048 14.6707C4.46889 14.5956 4.47872 14.5093 4.52645 14.4432C4.57417 14.3771 4.65288 14.3407 4.73413 14.3471C5.1933 14.3932 5.65706 14.3505 6.10008 14.2212C4.43227 13.875 3.17909 12.4904 2.99974 10.7957C2.99337 10.7144 3.0298 10.6357 3.09588 10.5879C3.16195 10.5402 3.24812 10.5303 3.32326 10.562C3.77082 10.7595 4.25397 10.8635 4.74312 10.8676C3.28172 9.90846 2.65049 8.08405 3.20643 6.42622C3.26382 6.26513 3.40169 6.14612 3.56938 6.11294C3.73706 6.07975 3.90984 6.13728 4.0242 6.26439C5.99627 8.36325 8.70592 9.61396 11.5818 9.75279C11.5082 9.45885 11.472 9.15676 11.474 8.85372C11.5009 7.26472 12.4841 5.84921 13.9633 5.26987C15.4424 4.69054 17.1248 5.06203 18.2229 6.21044C18.9713 6.06785 19.6949 5.81645 20.3706 5.46421C20.4201 5.43331 20.4829 5.43331 20.5324 5.46421C20.5633 5.51373 20.5633 5.57652 20.5324 5.62604C20.2051 6.37552 19.6522 7.00412 18.9508 7.42419C19.565 7.35296 20.1684 7.20807 20.7481 6.99264C20.7969 6.95942 20.861 6.95942 20.9098 6.99264C20.9507 7.01134 20.9813 7.04711 20.9934 7.09042C21.0055 7.13373 20.9979 7.18018 20.9727 7.2174Z"
                      fill="#1DA1F2"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 6.5H13.5C12.9477 6.5 12.5 6.94772 12.5 7.5V10.5H16.5C16.6137 10.4975 16.7216 10.5504 16.7892 10.6419C16.8568 10.7334 16.8758 10.852 16.84 10.96L16.1 13.16C16.0318 13.3619 15.8431 13.4984 15.63 13.5H12.5V21C12.5 21.2761 12.2761 21.5 12 21.5H9.5C9.22386 21.5 9 21.2761 9 21V13.5H7.5C7.22386 13.5 7 13.2761 7 13V11C7 10.7239 7.22386 10.5 7.5 10.5H9V7.5C9 5.29086 10.7909 3.5 13 3.5H16.5C16.7761 3.5 17 3.72386 17 4V6C17 6.27614 16.7761 6.5 16.5 6.5Z"
                      fill="#2058CD"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-1 lg:space-x-2">
              <p className="font-Raleway font-bold text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-primary bg-[#F4F4F4] w-full h-[29px]">
                Food
              </p>
              <p className="font-Raleway font-bold text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-primary bg-[#F4F4F4] w-full h-[29px]">
                Vegetable
              </p>
              <p className="font-Raleway font-bold text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-primary bg-[#F4F4F4] w-full h-[29px]">
                freshfood
              </p>
              <p className="font-Raleway font-bold text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-primary bg-[#F4F4F4] w-full h-[29px]">
                veggie
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 pt-4 pb-4">
          <div>
            <img src={user} alt="" />
          </div>
          <div>
            <p className="font-Roboto font-semibold text-sm md:text-base text-black">
              Darrell Steward
            </p>
            <p className="font-Roboto text-xs md:text-base text-black">
              Author
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesIntroductionAndConclusion;
