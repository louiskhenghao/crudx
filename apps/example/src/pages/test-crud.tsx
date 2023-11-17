import { useMemo } from 'react';
import toast from 'react-hot-toast';
import {
  CreateOneMotorCarMutation,
  CreateOneMotorCarMutationVariables,
  DeleteOneMotorCarMutation,
  DeleteOneMotorCarMutationVariables,
  GetPortalMotorCarQuery,
  GetPortalMotorCarQueryVariables,
  GetPortalMotorCarsQuery,
  GetPortalMotorCarsQueryVariables,
  PortalMotorCarInfoFragment,
  UpdateOneMotorCarMutation,
  UpdateOneMotorCarMutationVariables,
  useCreateOneMotorCarMutation,
  useDeleteOneMotorCarMutation,
  useGetPortalMotorCarLazyQuery,
  useGetPortalMotorCarQuery,
  useGetPortalMotorCarsQuery,
  useUpdateOneMotorCarMutation,
} from '@apps/graphql';
import { CRUD } from '@crudx/core';
import { Table } from '@crudx/mui';
import Image from 'next/image';

export function Index() {
  const crudHelper = new CRUD<{
    get: [
      GetPortalMotorCarQuery,
      GetPortalMotorCarQueryVariables,
      PortalMotorCarInfoFragment
    ];
    list: [GetPortalMotorCarsQuery, GetPortalMotorCarsQueryVariables];
    create: [CreateOneMotorCarMutation, CreateOneMotorCarMutationVariables];
    update: [UpdateOneMotorCarMutation, UpdateOneMotorCarMutationVariables];
    delete: [DeleteOneMotorCarMutation, DeleteOneMotorCarMutationVariables];
  }>(
    'motorcar',
    {
      get: { key: 'getPortalMotorCar', query: useGetPortalMotorCarLazyQuery },
      list: { key: 'getPortalMotorCars', query: useGetPortalMotorCarsQuery },
      create: {
        key: 'createOneMotorCar',
        query: useCreateOneMotorCarMutation,
      },
      update: {
        key: 'updateOneMotorCar',
        query: useUpdateOneMotorCarMutation,
      },
      delete: {
        key: 'deleteOneMotorCar',
        query: useDeleteOneMotorCarMutation,
      },
    },
    {
      paging: {
        strategy: 'OFFSET',
      },
      nodes: {
        notification: (options) => {
          // notification will pass back `type`, duration`, `message`, you can consume it based on your need
          const { type, message } = options;
          switch (type) {
            case 'success':
              toast.success(message);
              break;
            case 'error':
              toast.error(message);
              break;
          }
        },
        table: (nodeProps) => {
          const {
            accessibility,
            context,
            pagination,
            data,
            loading,
            ...restProps
          } = nodeProps;
          const { pagingProps } = context;

          console.log('tableNodeProsp --->', nodeProps);

          return (
            <Table<PortalMotorCarInfoFragment>
              // <Table<string>
              checkbox={{
                enabled: true,
                // dataIndex: 'bank_id',
              }}
              data={data}
              columns={[
                {
                  key: 'id',
                  title: 'ID',
                  dataIndex: 'id',
                },
                {
                  key: 'name',
                  title: 'Name',
                  dataIndex: 'modelName',
                },
                {
                  key: 'logo',
                  title: 'Name',
                  dataIndex: 'financialPlan',
                  render(value, record, index) {
                    // record.financialPlan.
                    //
                    return (
                      <>
                        <Image
                          alt={record?.images ?? ''}
                          width={150}
                          height={30}
                          style={{ objectFit: 'contain' }}
                          src={value?.fullImages?.url ?? ''}
                        />
                        {JSON.stringify(value)}
                      </>
                    );
                  },
                },
              ]}
              onCheck={(data) => {
                // data.map(e => e.)
              }}
            />
          );

          return (
            <>
              <table>
                <tbody>
                  {loading ? (
                    <tr>
                      <td>Loading..</td>
                    </tr>
                  ) : (
                    data.map((e) => {
                      return (
                        <tr key={e.id}>
                          <td>{e.category?.name}</td>
                          <td>{e.brand?.name}</td>
                          <td>{e.modelName}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
              <div>
                <div>Current Page: {pagination?.current}</div>
                <div>Default Current Page: {pagination?.defaultCurrent}</div>
                <div>Default Page Size: {pagination?.defaultPageSize}</div>
                <button onClick={pagination?.reset}>Reset</button>
                <button onClick={pagination?.previous}>Previous</button>
                <button onClick={pagination?.next}>Next</button>
                <button
                  onClick={() => {
                    pagination?.paginateTo(2);
                  }}
                >
                  Go Page 2
                </button>
              </div>
            </>
          );
        },
      },
    }
  );

  const crudProps = crudHelper.use({
    paging: {
      limit: 10,
    },
  });
  const {
    result, // useQuery result from list action
    detail, // crud fetch methods
    mutation, // GraphQL Tuple for mutation
    components, // component props for Table & CrudPanel
    rowSelection, // hooks for controlling table
    pagination, // hooks for pagination
  } = crudProps;
  console.log('crud ----->', crudProps);

  return <div>{components.renderTable?.()}</div>;
}

export default Index;
