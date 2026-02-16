import { getCapitalizedIndividualName } from "../lib/string";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { LinkWithPrefetch } from "./ui/link-with-prefetch";

export interface BreadcrumbWithCategoryProps {
  category: string;
  categoryPrefixUrl: string;
  baseUrl: string;
  baseLabel: string;
}

export function BreadcrumbWithCategory(props: BreadcrumbWithCategoryProps) {
  return (
    <Breadcrumb className="container pb-0 px-3">
      <BreadcrumbList className="gap-0!">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Button asChild variant="link" size="sm">
              <LinkWithPrefetch to={props.baseUrl}>
                {props.baseLabel}
              </LinkWithPrefetch>
            </Button>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Button asChild variant="link" size="sm">
              <LinkWithPrefetch
                to={`${props.categoryPrefixUrl}/${props.category}`}
              >
                {getCapitalizedIndividualName(props.category)}
              </LinkWithPrefetch>
            </Button>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
