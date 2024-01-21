import { paths as AuthShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/auth-shop-public';
import { paths as AdminShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/admin-shop-public';
import { paths as ClaimShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/claim-shop-public';
import { paths as DisplayShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/display-shop-public';
import { paths as ManageShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/manage-shop-public';
import { paths as MemberShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/member-shop-public';
import { paths as OrderShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/order-shop-public';
import { paths as ProductShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/product-shop-public';
import { paths as PromotionShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/promotion-shop-public';
import { paths as WorkspaceShopPublicPaths } from '@/shopby-api/openapi-types/shopby-api-types/workspace-shop-public';

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
