import { paths as AuthShopPublicPaths } from '@/openapi-types/shopby-api-types/auth-shop-public';
import { paths as AdminShopPublicPaths } from '@/openapi-types/shopby-api-types/admin-shop-public';
import { paths as ClaimShopPublicPaths } from '@/openapi-types/shopby-api-types/claim-shop-public';
import { paths as DisplayShopPublicPaths } from '@/openapi-types/shopby-api-types/display-shop-public';
import { paths as ManageShopPublicPaths } from '@/openapi-types/shopby-api-types/manage-shop-public';
import { paths as MemberShopPublicPaths } from '@/openapi-types/shopby-api-types/member-shop-public';
import { paths as OrderShopPublicPaths } from '@/openapi-types/shopby-api-types/order-shop-public';
import { paths as ProductShopPublicPaths } from '@/openapi-types/shopby-api-types/product-shop-public';
import { paths as PromotionShopPublicPaths } from '@/openapi-types/shopby-api-types/promotion-shop-public';
import { paths as WorkspaceShopPublicPaths } from '@/openapi-types/shopby-api-types/workspace-shop-public';

export interface paths
  extends AuthShopPublicPaths,
    AdminShopPublicPaths,
    ClaimShopPublicPaths,
    DisplayShopPublicPaths,
    ManageShopPublicPaths,
    MemberShopPublicPaths,
    OrderShopPublicPaths,
    ProductShopPublicPaths,
    PromotionShopPublicPaths,
    WorkspaceShopPublicPaths {}
