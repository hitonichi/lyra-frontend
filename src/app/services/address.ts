const CITIES = [
  {
    id: '01',
    name: 'Hà Nội',
    type: 'Thành phố Trung ương',
    slug: 'HANOI',
    deleted: 0,
  },
  {
    id: '02',
    name: 'Hà Giang',
    type: 'Tỉnh',
    slug: 'HAGIANG',
    deleted: 0,
  },
  {
    id: '04',
    name: 'Cao Bằng',
    type: 'Tỉnh',
    slug: 'CAOBANG',
    deleted: 0,
  },
  {
    id: '06',
    name: 'Bắc Kạn',
    type: 'Tỉnh',
    slug: 'BACKAN',
    deleted: 0,
  },
  {
    id: '08',
    name: 'Tuyên Quang',
    type: 'Tỉnh',
    slug: 'TUYENQUANG',
    deleted: 0,
  },
  {
    id: '10',
    name: 'Lào Cai',
    type: 'Tỉnh',
    slug: 'LAOCAI',
    deleted: 0,
  },
  {
    id: '11',
    name: 'Điện Biên',
    type: 'Tỉnh',
    slug: 'DIENBIEN',
    deleted: 0,
  },
  {
    id: '12',
    name: 'Lai Châu',
    type: 'Tỉnh',
    slug: 'LAICHAU',
    deleted: 0,
  },
  {
    id: '14',
    name: 'Sơn La',
    type: 'Tỉnh',
    slug: 'SONLA',
    deleted: 0,
  },
  {
    id: '15',
    name: 'Yên Bái',
    type: 'Tỉnh',
    slug: 'YENBAI',
    deleted: 0,
  },
  {
    id: '17',
    name: 'Hoà Bình',
    type: 'Tỉnh',
    slug: 'HOABINH',
    deleted: 0,
  },
  {
    id: '19',
    name: 'Thái Nguyên',
    type: 'Tỉnh',
    slug: 'THAINGUYEN',
    deleted: 0,
  },
  {
    id: '20',
    name: 'Lạng Sơn',
    type: 'Tỉnh',
    slug: 'LANGSON',
    deleted: 0,
  },
  {
    id: '22',
    name: 'Quảng Ninh',
    type: 'Tỉnh',
    slug: 'QUANGNINH',
    deleted: 0,
  },
  {
    id: '24',
    name: 'Bắc Giang',
    type: 'Tỉnh',
    slug: 'BACGIANG',
    deleted: 0,
  },
  {
    id: '25',
    name: 'Phú Thọ',
    type: 'Tỉnh',
    slug: 'PHUTHO',
    deleted: 0,
  },
  {
    id: '26',
    name: 'Vĩnh Phúc',
    type: 'Tỉnh',
    slug: 'VINHPHUC',
    deleted: 0,
  },
  {
    id: '27',
    name: 'Bắc Ninh',
    type: 'Tỉnh',
    slug: 'BACNINH',
    deleted: 0,
  },
  {
    id: '30',
    name: 'Hải Dương',
    type: 'Tỉnh',
    slug: 'HAIDUONG',
    deleted: 0,
  },
  {
    id: '31',
    name: 'Hải Phòng',
    type: 'Thành phố Trung ương',
    slug: 'HAIPHONG',
    deleted: 0,
  },
  {
    id: '33',
    name: 'Hưng Yên',
    type: 'Tỉnh',
    slug: 'HUNGYEN',
    deleted: 0,
  },
  {
    id: '34',
    name: 'Thái Bình',
    type: 'Tỉnh',
    slug: 'THAIBINH',
    deleted: 0,
  },
  {
    id: '35',
    name: 'Hà Nam',
    type: 'Tỉnh',
    slug: 'HANAM',
    deleted: 0,
  },
  {
    id: '36',
    name: 'Nam Định',
    type: 'Tỉnh',
    slug: 'NAMDINH',
    deleted: 0,
  },
  {
    id: '37',
    name: 'Ninh Bình',
    type: 'Tỉnh',
    slug: 'NINHBINH',
    deleted: 0,
  },
  {
    id: '38',
    name: 'Thanh Hóa',
    type: 'Tỉnh',
    slug: 'THANHHOA',
    deleted: 0,
  },
  {
    id: '40',
    name: 'Nghệ An',
    type: 'Tỉnh',
    slug: 'NGHEAN',
    deleted: 0,
  },
  {
    id: '42',
    name: 'Hà Tĩnh',
    type: 'Tỉnh',
    slug: 'HATINH',
    deleted: 0,
  },
  {
    id: '44',
    name: 'Quảng Bình',
    type: 'Tỉnh',
    slug: 'QUANGBINH',
    deleted: 0,
  },
  {
    id: '45',
    name: 'Quảng Trị',
    type: 'Tỉnh',
    slug: 'QUANGTRI',
    deleted: 0,
  },
  {
    id: '46',
    name: 'Thừa Thiên Huế',
    type: 'Tỉnh',
    slug: 'THUATHIENHUE',
    deleted: 0,
  },
  {
    id: '48',
    name: 'Đà Nẵng',
    type: 'Thành phố Trung ương',
    slug: 'DANANG',
    deleted: 0,
  },
  {
    id: '49',
    name: 'Quảng Nam',
    type: 'Tỉnh',
    slug: 'QUANGNAM',
    deleted: 0,
  },
  {
    id: '51',
    name: 'Quảng Ngãi',
    type: 'Tỉnh',
    slug: 'QUANGNGAI',
    deleted: 0,
  },
  {
    id: '52',
    name: 'Bình Định',
    type: 'Tỉnh',
    slug: 'BINHDINH',
    deleted: 0,
  },
  {
    id: '54',
    name: 'Phú Yên',
    type: 'Tỉnh',
    slug: 'PHUYEN',
    deleted: 0,
  },
  {
    id: '56',
    name: 'Khánh Hòa',
    type: 'Tỉnh',
    slug: 'KHANHHOA',
    deleted: 0,
  },
  {
    id: '58',
    name: 'Ninh Thuận',
    type: 'Tỉnh',
    slug: 'NINHTHUAN',
    deleted: 0,
  },
  {
    id: '60',
    name: 'Bình Thuận',
    type: 'Tỉnh',
    slug: 'BINHTHUAN',
    deleted: 0,
  },
  {
    id: '62',
    name: 'Kon Tum',
    type: 'Tỉnh',
    slug: 'KONTUM',
    deleted: 0,
  },
  {
    id: '64',
    name: 'Gia Lai',
    type: 'Tỉnh',
    slug: 'GIALAI',
    deleted: 0,
  },
  {
    id: '66',
    name: 'Đắk Lắk',
    type: 'Tỉnh',
    slug: 'DAKLAK',
    deleted: 0,
  },
  {
    id: '67',
    name: 'Đắk Nông',
    type: 'Tỉnh',
    slug: 'DAKNONG',
    deleted: 0,
  },
  {
    id: '68',
    name: 'Lâm Đồng',
    type: 'Tỉnh',
    slug: 'LAMDONG',
    deleted: 0,
  },
  {
    id: '70',
    name: 'Bình Phước',
    type: 'Tỉnh',
    slug: 'BINHPHUOC',
    deleted: 0,
  },
  {
    id: '72',
    name: 'Tây Ninh',
    type: 'Tỉnh',
    slug: 'TAYNINH',
    deleted: 0,
  },
  {
    id: '74',
    name: 'Bình Dương',
    type: 'Tỉnh',
    slug: 'BINHDUONG',
    deleted: 0,
  },
  {
    id: '75',
    name: 'Đồng Nai',
    type: 'Tỉnh',
    slug: 'DONGNAI',
    deleted: 0,
  },
  {
    id: '77',
    name: 'Bà Rịa - Vũng Tàu',
    type: 'Tỉnh',
    slug: 'BARIAVUNGTAU',
    deleted: 0,
  },
  {
    id: '79',
    name: 'Hồ Chí Minh',
    type: 'Thành phố Trung ương',
    slug: 'HOCHIMINH',
    deleted: 0,
  },
  {
    id: '80',
    name: 'Long An',
    type: 'Tỉnh',
    slug: 'LONGAN',
    deleted: 0,
  },
  {
    id: '82',
    name: 'Tiền Giang',
    type: 'Tỉnh',
    slug: 'TIENGIANG',
    deleted: 0,
  },
  {
    id: '83',
    name: 'Bến Tre',
    type: 'Tỉnh',
    slug: 'BENTRE',
    deleted: 0,
  },
  {
    id: '84',
    name: 'Trà Vinh',
    type: 'Tỉnh',
    slug: 'TRAVINH',
    deleted: 0,
  },
  {
    id: '86',
    name: 'Vĩnh Long',
    type: 'Tỉnh',
    slug: 'VINHLONG',
    deleted: 0,
  },
  {
    id: '87',
    name: 'Đồng Tháp',
    type: 'Tỉnh',
    slug: 'DONGTHAP',
    deleted: 0,
  },
  {
    id: '89',
    name: 'An Giang',
    type: 'Tỉnh',
    slug: 'ANGIANG',
    deleted: 0,
  },
  {
    id: '91',
    name: 'Kiên Giang',
    type: 'Tỉnh',
    slug: 'KIENGIANG',
    deleted: 0,
  },
  {
    id: '92',
    name: 'Cần Thơ',
    type: 'Thành phố Trung ương',
    slug: 'CANTHO',
    deleted: 0,
  },
  {
    id: '93',
    name: 'Hậu Giang',
    type: 'Tỉnh',
    slug: 'HAUGIANG',
    deleted: 0,
  },
  {
    id: '94',
    name: 'Sóc Trăng',
    type: 'Tỉnh',
    slug: 'SOCTRANG',
    deleted: 0,
  },
  {
    id: '95',
    name: 'Bạc Liêu',
    type: 'Tỉnh',
    slug: 'BACLIEU',
    deleted: 0,
  },
  {
    id: '96',
    name: 'Cà Mau',
    type: 'Tỉnh',
    slug: 'CAMAU',
    deleted: 0,
  },
];

const DISTRICT = [
  {
    id: '760',
    name: 'Quận 1',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '761',
    name: 'Quận 12',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '764',
    name: 'Quận Gò Vấp',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '765',
    name: 'Quận Bình Thạnh',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '766',
    name: 'Quận Tân Bình',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '767',
    name: 'Quận Tân Phú',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '768',
    name: 'Quận Phú Nhuận',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '769',
    name: 'Thành phố Thủ Đức',
    type: 'Thành phố',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '770',
    name: 'Quận 3',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '771',
    name: 'Quận 10',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '772',
    name: 'Quận 11',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '773',
    name: 'Quận 4',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '774',
    name: 'Quận 5',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '775',
    name: 'Quận 6',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '776',
    name: 'Quận 8',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '777',
    name: 'Quận Bình Tân',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '778',
    name: 'Quận 7',
    type: 'Quận',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '783',
    name: 'Huyện Củ Chi',
    type: 'Huyện',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '784',
    name: 'Huyện Hóc Môn',
    type: 'Huyện',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '785',
    name: 'Huyện Bình Chánh',
    type: 'Huyện',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '786',
    name: 'Huyện Nhà Bè',
    type: 'Huyện',
    city_id: '79',
    deleted: 0,
  },
  {
    id: '787',
    name: 'Huyện Cần Giờ',
    type: 'Huyện',
    city_id: '79',
    deleted: 0,
  },
];

const WARDS = [
  {
    id: '26734',
    name: 'Phường Tân Định',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26737',
    name: 'Phường Đa Kao',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26740',
    name: 'Phường Bến Nghé',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26743',
    name: 'Phường Bến Thành',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26746',
    name: 'Phường Nguyễn Thái Bình',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26749',
    name: 'Phường Phạm Ngũ Lão',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26752',
    name: 'Phường Cầu Ông Lãnh',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26755',
    name: 'Phường Cô Giang',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26758',
    name: 'Phường Nguyễn Cư Trinh',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
  {
    id: '26761',
    name: 'Phường Cầu Kho',
    type: 'Phường',
    district_id: '760',
    deleted: 0,
  },
];
``;

export const getCities = async () => {
  return CITIES;
};

export const getDistricts = async () => {
  return DISTRICT;
};

export const getWards = async () => {
  return WARDS;
};
