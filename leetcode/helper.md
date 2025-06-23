

ASCII code:

65	A uppercase a
66	B uppercase b	
67	C uppercase c	
68	D uppercase d
69	E uppercase e	
70	F uppercase f	
71	G uppercase g
72	H uppercase h	
73	I uppercase i	
74	J uppercase j
75	K uppercase k	
76	L uppercase l	
77	M uppercase m
78	N uppercase n	
79	O uppercase o	
80	P uppercase p
81	Q uppercase q	
82	R uppercase r	
83	S uppercase s
84	T uppercase t	
85	U uppercase u	
86	V uppercase v
87	W uppercase w	
88	X uppercase x	
89	Y uppercase y
90	Z uppercase z

91	[ left square bracket	
92	\ backslash
93	] right square bracket	
94	^ caret	
95	_ underscore
96	` grave accent	

97	a lowercase a	
98	b lowercase b
99	c lowercase c	
100	d lowercase d	
101	e lowercase e
102	f lowercase f	
103	g lowercase g	
104	h lowercase h
105	i lowercase i	
106	j lowercase j	
107	k lowercase k
108	l lowercase l	
109	m lowercase m	
110	n lowercase n
111	o lowercase o	
112	p lowercase p	
113	q lowercase q
114	r lowercase r	
115	s lowercase s	
116	t lowercase t
117	u lowercase u	
118	v lowercase v	
119	w lowercase w
120	x lowercase x	
121	y lowercase y	
122	z lowercase z


Difference between str.charAt(0) & str.charCodeAt(0);

```javascript
    const str = 'HELLO WORLD'

    console.log(`str.charAt(0)`, str.charAt(0));   // H
    console.log(`str.charAt(10)`, str.charAt(10));   // D
    console.log(`str.charAt(0)`, str.charAt(str.length - 1));   // D

    console.log(`str.charAt(0)`, str.charCodeAt(0));   // 72
    console.log(`str.charAt(10)`, str.charCodeAt(10));   // 68
    console.log(`str.charAt(0)`, str.charCodeAt(str.length - 1));   // 68
```