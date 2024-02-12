import { paths as AuthApiPaths } from '@/paths/auth-shop-public';
import { paths as AdminApiPaths } from '@/paths/admin-shop-public';
import { paths as ClaimApiPaths } from '@/paths/claim-shop-public';
import { paths as DisplayApiPaths } from '@/paths/display-shop-public';
import { paths as ManageApiPaths } from '@/paths/manage-shop-public';
import { paths as MemberApiPaths } from '@/paths/member-shop-public';
import { paths as OrderApiPaths } from '@/paths/order-shop-public';
import { paths as ProductApiPaths } from '@/paths/product-shop-public';
import { paths as PromotionApiPaths } from '@/paths/promotion-shop-public';
import { paths as WorkspaceApiPaths } from '@/paths/workspace-shop-public';

export type Paths = AuthApiPaths &
  AdminApiPaths &
  ClaimApiPaths &
  DisplayApiPaths &
  ManageApiPaths &
  MemberApiPaths &
  OrderApiPaths &
  ProductApiPaths &
  PromotionApiPaths &
  WorkspaceApiPaths;
