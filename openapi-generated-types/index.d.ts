import { paths as AuthShopPublicPaths } from '../well-generated-types/auth-shop-public';
import { paths as AdminShopPublicPaths } from '../well-generated-types/admin-shop-public';
import { paths as ClaimShopPublicPaths } from '../well-generated-types/claim-shop-public';
import { paths as DisplayShopPublicPaths } from '../well-generated-types3/display-shop-public';
import { paths as ManageShopPublicPaths } from '../well-generated-types/manage-shop-public';
import { paths as MemberShopPublicPaths } from '../well-generated-types/member-shop-public';
import { paths as OrderShopPublicPaths } from '../well-generated-types/order-shop-public';
import { paths as ProductShopPublicPaths } from '../well-generated-types2/product-shop-public';
import { paths as PromotionShopPublicPaths } from '../well-generated-types/promotion-shop-public';
import { paths as WorkspaceShopPublicPaths } from '../well-generated-types/workspace-shop-public';

type OpenShopByApiPaths = AuthShopPublicPaths &
  AdminShopPublicPaths &
  ClaimShopPublicPaths &
  DisplayShopPublicPaths &
  ManageShopPublicPaths &
  MemberShopPublicPaths &
  OrderShopPublicPaths &
  ProductShopPublicPaths &
  PromotionShopPublicPaths &
  WorkspaceShopPublicPaths;
export default OpenShopByApiPaths;
