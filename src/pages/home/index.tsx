import { useCustom } from "@refinedev/core";

import { Col, Row } from "antd";

import type { DashboardTotalCountsQuery } from "@/graphql/types";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "@/graphql/queries";
import { CalendarUpcomingEvents } from "@/components/home/upcoming-events";
import { DealsChart } from "@/components/home/deal-chart";
import { TotalCountCart } from "@/components/home/total-count-cart";
import { LatestActivities } from "@/components/home/latest-activites";

export const Home = () => {
  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
    url: "",
    method: "get",
    meta: { gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY },
  });

  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCart
            resource="companies"
            isLoading={isLoading}
            totalCount={data?.data.companies.totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCart
            resource="contacts"
            isLoading={isLoading}
            totalCount={data?.data.contacts.totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCart
            resource="deals"
            isLoading={isLoading}
            totalCount={data?.data.deals.totalCount}
          />
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
          }}
        >
          <CalendarUpcomingEvents />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: "460px",
          }}
        >
          <DealsChart />
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col xs={24}>
          {" "}
          <LatestActivities />{" "}
        </Col>
      </Row>
    </div>
  );
};
