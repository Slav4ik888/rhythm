import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MoveItemUpdownward } from '..';
import { TowardType } from '../toward'; // Предполагается, что тип TowardType определен здесь
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { setupRender, StoreProvider } from 'shared/lib/tests';
import { StateSchema } from 'app/providers/store';
import { UIConfiguratorProvider } from 'app/providers/theme';



// Мокаем хук useDashboardView
jest.mock('entities/dashboard-view');
StoreProvider
const mockViewItem = {
  id: 'item-1',
  parentId: 'parent-1',
  order: 2,
} as ViewItem;

const mockChildrenViewItems = [
  { id: 'item-1', parentId: 'parent-1', order: 1000 },
  { id: 'item-2', parentId: 'parent-1', order: 2000 },
  { id: 'item-3', parentId: 'parent-1', order: 3000 },
];

describe('MoveItemUpdownward', () => {
  beforeEach(() => {
    (useDashboardView as jest.Mock).mockReturnValue({
      childrenViewItems: mockChildrenViewItems,
      updateViewItem: jest.fn(),
    });
  });

  it('рендерит кнопки "вверх" и "вниз"', () => {
    // render(<MoveItemUpdownward viewItem={mockViewItem} />);
    const mockedStore: DeepPartial<StateSchema> = {
      user: {},
      dashboardView: {
        loading : true,
        errors  : {}
      }
    };

    const { user, debug, getByTestId, getByRole, getByText } = setupRender(
      <StoreProvider initialState={mockedStore}>
        <UIConfiguratorProvider>
          <MoveItemUpdownward viewItem={mockViewItem} />
        </UIConfiguratorProvider>
      </StoreProvider>
    );
    
    expect(getByTestId('btn-up')).toBeInTheDocument()
    expect(getByTestId('btn-down')).toBeInTheDocument()

    // expect(getByRole('button', { name: /вверх/i })).toBeInTheDocument();
    // expect(getByRole('button', { name: /вниз/i })).toBeInTheDocument();
  });

  it('вызывает updateViewItem с правильным order при клике "вверх"', () => {
    const { updateViewItem } = useDashboardView({ parentId: mockViewItem.parentId });
    const mockedStore: DeepPartial<StateSchema> = {
      user: {},
      dashboardView: {
        loading : true,
        errors  : {}
      }
    };
    const { user, debug, getByTestId, getByRole, getByText } = setupRender(
      <StoreProvider initialState={mockedStore}>
        <UIConfiguratorProvider>
          <MoveItemUpdownward viewItem={mockViewItem} />
        </UIConfiguratorProvider>
      </StoreProvider>
    );

    fireEvent.click(getByTestId('btn-up'));
    
    // Ожидаем, что order изменится с 1000 → 4000 (потому что item-2 имеет order=1)
    expect(updateViewItem).toHaveBeenCalledWith({
      id: 'item-1',
      order: 4000, // Новый order после перемещения вверх
    });
  });

  it('вызывает updateViewItem с правильным order при клике "вниз"', () => {
    const { updateViewItem } = useDashboardView({ parentId: mockViewItem.parentId });
    const mockedStore: DeepPartial<StateSchema> = {
      user: {},
      dashboardView: {
        loading : true,
        errors  : {}
      }
    };
    const { user, debug, getByTestId, getByRole, getByText } = setupRender(
      <StoreProvider initialState={mockedStore}>
        <UIConfiguratorProvider>
          <MoveItemUpdownward viewItem={mockViewItem} />
        </UIConfiguratorProvider>
      </StoreProvider>
    );

    fireEvent.click(getByTestId('btn-down'));
    
    // Ожидаем, что order изменится с 2 → 3 (потому что item-3 имеет order=3)
    expect(updateViewItem).toHaveBeenCalledWith({
      id: 'item-1',
      order: 2500, // Новый order после перемещения вниз
    });
  });

  // it('не вызывает updateViewItem, если перемещение невозможно (граничные случаи)', () => {
  //   const viewItemFirst = { ...mockViewItem, order: 1 }; // Первый элемент (нельзя вверх)
  //   const viewItemLast = { ...mockViewItem, order: 3 };  // Последний элемент (нельзя вниз)

  //   const { updateViewItem } = useDashboardView({ parentId: mockViewItem.parentId });

  //   const { rerender } = render(<MoveItemUpdownward viewItem={viewItemFirst} />);
  //   fireEvent.click(screen.getByRole('button', { name: /up/i }));
  //   expect(updateViewItem).not.toHaveBeenCalled(); // Не должно быть вызова

  //   rerender(<MoveItemUpdownward viewItem={viewItemLast} />);
  //   fireEvent.click(screen.getByRole('button', { name: /down/i }));
  //   expect(updateViewItem).not.toHaveBeenCalled(); // Не должно быть вызова
  // });
});

// npm run test:unit move-item-up-downward.test.tsx
