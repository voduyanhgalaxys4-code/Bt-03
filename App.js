
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const books = [
  {
    id: '1',
    name: 'Đắc Nhân Tâm',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-lvlb8h1sgfip78?utm_source=chatgpt.com',
    price: '75.000đ',
    description: 'Nghệ thuật đối nhân xử thế.',
  },
  {
    id: '2',
    name: 'Nhà Giả Kim',
    image: 'https://down-vn.img.susercontent.com/file/ea35cecdb662b48b73ec76f1c83ef110?utm_source=chatgpt.com',
    price: '68.000đ',
    description: 'Hành trình theo đuổi ước mơ.',
  },
  {
    id: '3',
    name: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
    image: 'https://www.netabooks.vn/Data/Sites/1/Product/2625/tuoi-tre-dang-gia-bao-nhieu-3.jpg?utm_source=chatgpt.com',
    price: '85.000đ',
    description: 'Những bài học dành cho tuổi trẻ.',
  },
  {
    id: '4',
    name: 'Dế Mèn Phiêu Lưu Ký',
    image: 'https://down-vn.img.susercontent.com/file/ce1ffce340cbf23e310ae388c1a12f3a?utm_source=chatgpt.com',
    price: '55.000đ',
    description: 'Câu chuyện phiêu lưu thú vị.',
  },
  {
    id: '5',
    name: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh',
    image: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974158448.jpg?utm_source=chatgpt.com',
    price: '90.000đ',
    description: 'Câu chuyện tuổi thơ đầy cảm xúc.',
  },
  {
    id: '6',
    name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ',
    image: 'https://product.hstatic.net/1000075554/product/-ve-di-tuoi-tho-bia-mem-tai-ban-hk7yo_938e8c000dc5478e9a221960d439af49_41f88044370042b7a0620f31ed252bc6_master.jpeg?utm_source=chatgpt.com',
    price: '72.000đ',
    description: 'Trở về những ký ức tuổi thơ.',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CỬA HÀNG SÁCH</Text>
      <Text style={styles.subtitle}>
        Khám phá những cuốn sách hay
      </Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1ea',
    padding: 15,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5d4037',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#795548',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 8,
  },
});
